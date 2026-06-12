import { NextResponse } from "next/server";
import { getRepos } from "@/lib/github";

// Server-side only: the GitHub token never reaches the browser.
export const revalidate = 3600;

export async function GET() {
  const repos = await getRepos();
  return NextResponse.json({ repos });
}
