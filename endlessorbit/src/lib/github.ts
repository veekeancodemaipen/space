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

const SAMPLE_REPOS: GitHubRepo[] = [
  { id: 1, name: "kubkathon", description: "Campus Web3 hackathon platform & resources.", language: "TypeScript", stars: 42, forks: 7, updatedAt: new Date(Date.now() - 5 * 86400000).toISOString(), htmlUrl: "https://github.com/your-github-username/kubkathon", homepage: "https://kubkathon.example.com" },
  { id: 2, name: "tcas-sim", description: "TCAS-style university allocation simulator.", language: "TypeScript", stars: 31, forks: 4, updatedAt: new Date(Date.now() - 20 * 86400000).toISOString(), htmlUrl: "https://github.com/your-github-username/tcas-sim", homepage: "https://tcas-sim.example.com" },
  { id: 3, name: "thai-fruit-export", description: "Data-science analysis of Thai fruit export trends.", language: "Jupyter Notebook", stars: 18, forks: 2, updatedAt: new Date(Date.now() - 40 * 86400000).toISOString(), htmlUrl: "https://github.com/your-github-username/thai-fruit-export", homepage: null },
  { id: 4, name: "ai-web3-lab", description: "Experiments with AI agents and on-chain demos.", language: "Python", stars: 25, forks: 3, updatedAt: new Date(Date.now() - 2 * 86400000).toISOString(), htmlUrl: "https://github.com/your-github-username/ai-web3-lab", homepage: null },
  { id: 5, name: "endless-orbit", description: "This cinematic space-journey portfolio.", language: "TypeScript", stars: 12, forks: 1, updatedAt: new Date().toISOString(), htmlUrl: "https://github.com/your-github-username/endless-orbit", homepage: "https://your-domain.com" },
  { id: 6, name: "notion-utils", description: "Small scripts that run my Notion-based operations.", language: "TypeScript", stars: 9, forks: 1, updatedAt: new Date(Date.now() - 60 * 86400000).toISOString(), htmlUrl: "https://github.com/your-github-username/notion-utils", homepage: null },
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
