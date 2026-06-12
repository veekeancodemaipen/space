import type { GitHubRepo } from "@/lib/types";

/**
 * GitHub integration (SERVER ONLY).
 * The token (if provided) is read from process.env and never sent to the client.
 * Falls back to a small set of sample repos if the username is missing or the
 * API call fails, so the constellation always has stars.
 */

const USERNAME =
  process.env.GITHUB_USERNAME ||
  process.env.NEXT_PUBLIC_GITHUB_USERNAME ||
  "";
const TOKEN = process.env.GITHUB_TOKEN;

// Real repos (snapshot) — used only if the GitHub API call fails.
const SAMPLE_REPOS: GitHubRepo[] = [
  { id: 1, name: "ic-plain-prep", description: "IC Plain (P1) exam-prep site — dark-mode UI + 100-question quiz.", language: "HTML", stars: 1, forks: 0, updatedAt: new Date().toISOString(), htmlUrl: "https://github.com/veekeancodemaipen/ic-plain-prep", homepage: null },
  { id: 2, name: "space", description: "This portfolio site.", language: "TypeScript", stars: 0, forks: 0, updatedAt: new Date().toISOString(), htmlUrl: "https://github.com/veekeancodemaipen/space", homepage: null },
  { id: 3, name: "Emag-Maxwell-s-Equations-Time-Harmonic-Field", description: "Coursework — Maxwell's equations, time-harmonic fields.", language: "HTML", stars: 0, forks: 0, updatedAt: new Date().toISOString(), htmlUrl: "https://github.com/veekeancodemaipen/Emag-Maxwell-s-Equations-Time-Harmonic-Field", homepage: null },
  { id: 4, name: "engecon", description: "Engineering economics coursework.", language: "JavaScript", stars: 0, forks: 0, updatedAt: new Date().toISOString(), htmlUrl: "https://github.com/veekeancodemaipen/engecon", homepage: null },
  { id: 5, name: "Linear-Transformation", description: "Coursework — linear transformations.", language: "HTML", stars: 0, forks: 0, updatedAt: new Date().toISOString(), htmlUrl: "https://github.com/veekeancodemaipen/Linear-Transformation", homepage: null },
  { id: 6, name: "Optical-Properties-of-Materials", description: "Coursework — optical properties of materials.", language: "HTML", stars: 0, forks: 0, updatedAt: new Date().toISOString(), htmlUrl: "https://github.com/veekeancodemaipen/Optical-Properties-of-Materials", homepage: null },
];

export function isGitHubConfigured(): boolean {
  return Boolean(USERNAME);
}

/** Fetch public repos for the configured user, sorted by stars then recency. */
export async function getRepos(limit = 18): Promise<GitHubRepo[]> {
  if (!USERNAME) return SAMPLE_REPOS;

  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
        },
        // Revalidate hourly — keeps us well under rate limits.
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      console.error("[github] API error:", res.status, await res.text());
      return SAMPLE_REPOS;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any[] = await res.json();
    return data
      .filter((r) => !r.fork && !r.archived)
      .map<GitHubRepo>((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
        updatedAt: r.updated_at,
        htmlUrl: r.html_url,
        homepage: r.homepage || null,
      }))
      .sort((a, b) => b.stars - a.stars || +new Date(b.updatedAt) - +new Date(a.updatedAt))
      .slice(0, limit);
  } catch (err) {
    console.error("[github] Falling back to sample repos:", err);
    return SAMPLE_REPOS;
  }
}
