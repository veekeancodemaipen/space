import { Client } from "@notionhq/client";
import type { Project, ProjectCategory, TimelinePhaseId } from "@/lib/types";
import { projects as mockProjects } from "@/data/projects";
import { slugify } from "@/lib/utils";

/**
 * Notion CMS integration (SERVER ONLY).
 *
 * Source of truth for the project catalog. If the env vars are missing,
 * everything gracefully falls back to the mock data in src/data/projects.ts,
 * so the site always renders.
 *
 * Expected Notion database properties (type in parentheses):
 *   Title           (Title)
 *   Year            (Rich text or Number)
 *   Category        (Select)
 *   Role            (Rich text)
 *   Description     (Rich text)
 *   Problem         (Rich text)   -> Challenge
 *   Process         (Rich text)
 *   Impact          (Rich text)
 *   Tools           (Multi-select)
 *   GitHub URL      (URL)
 *   Notion Detail URL (URL)
 *   Cover Image     (Files & media or URL)
 *   Featured        (Checkbox)
 *   Timeline Phase  (Select: highschool | posn | university | builder | future)
 */

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DB = process.env.NOTION_PROJECTS_DATABASE_ID;

export function isNotionConfigured(): boolean {
  return Boolean(NOTION_API_KEY && NOTION_DB);
}

let cachedClient: Client | null = null;
function getClient(): Client {
  if (!cachedClient) cachedClient = new Client({ auth: NOTION_API_KEY });
  return cachedClient;
}

/* ----------------------------- property readers ---------------------------- */
/* These are defensive: Notion's API shapes are loosely typed, so we read
   each property type carefully and fall back to sensible defaults.        */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function readTitle(prop: any): string {
  return prop?.title?.map((t: any) => t.plain_text).join("") ?? "";
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function readRichText(prop: any): string {
  if (prop?.rich_text) return prop.rich_text.map((t: any) => t.plain_text).join("");
  if (prop?.title) return readTitle(prop);
  if (typeof prop?.number === "number") return String(prop.number);
  return "";
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function readSelect(prop: any): string {
  return prop?.select?.name ?? "";
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function readMultiSelect(prop: any): string[] {
  return prop?.multi_select?.map((s: any) => s.name) ?? [];
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function readUrl(prop: any): string | undefined {
  return prop?.url ?? undefined;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function readCheckbox(prop: any): boolean {
  return Boolean(prop?.checkbox);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function readCover(prop: any): string | undefined {
  if (!prop) return undefined;
  if (prop.url) return prop.url;
  const file = prop.files?.[0];
  if (!file) return undefined;
  return file.external?.url ?? file.file?.url ?? undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapPageToProject(page: any): Project {
  const p = page.properties ?? {};
  const title = readTitle(p.Title) || "Untitled Mission";
  const phase = (readSelect(p["Timeline Phase"]) || undefined) as
    | TimelinePhaseId
    | undefined;

  return {
    slug: slugify(title) || page.id,
    title,
    category: (readSelect(p.Category) || "Coding / GitHub") as ProjectCategory,
    year: readRichText(p.Year) || "—",
    description: readRichText(p.Description),
    role: readRichText(p.Role),
    tools: readMultiSelect(p.Tools),
    notionUrl: readUrl(p["Notion Detail URL"]) ?? page.url,
    githubUrl: readUrl(p["GitHub URL"]),
    featured: readCheckbox(p.Featured),
    coverImage: readCover(p["Cover Image"]),
    timelinePhase: phase,
    brief: readRichText(p.Description),
    challenge: readRichText(p.Problem),
    process: readRichText(p.Process),
    impact: readRichText(p.Impact),
  };
}

/**
 * Fetch all projects. Uses Notion when configured, otherwise mock data.
 * Cached for 1 hour via the Next.js fetch/data cache on the consuming page.
 */
export async function getProjects(): Promise<Project[]> {
  if (!isNotionConfigured()) return mockProjects;

  try {
    const notion = getClient();
    const res = await notion.databases.query({
      database_id: NOTION_DB as string,
      sorts: [{ property: "Year", direction: "descending" }],
    });
    const mapped = res.results.map(mapPageToProject).filter((p) => p.title);
    return mapped.length ? mapped : mockProjects;
  } catch (err) {
    console.error("[notion] Falling back to mock projects:", err);
    return mockProjects;
  }
}

export async function getProjectBySlugCMS(
  slug: string,
): Promise<Project | undefined> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug);
}
