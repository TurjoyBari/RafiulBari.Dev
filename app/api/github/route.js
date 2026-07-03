import { NextResponse } from "next/server";
import { SITE } from "@/constants/site";

const CONTRIB_APIS = [
  (username) => `https://github-contributions-api.jogruber.de/v4/${username}`,
  (username) => `https://github-contributions-api.deno.dev/${username}.json`,
];

function getGithubHeaders() {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "rdev-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

function formatLocalDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function calculateStreak(contributions) {
  if (!contributions?.length) return 0;

  const activeDates = new Set(
    contributions.filter((day) => day.count > 0).map((day) => day.date)
  );

  if (!activeDates.size) return 0;

  let streak = 0;
  const checkDate = new Date();
  checkDate.setHours(0, 0, 0, 0);

  const todayStr = formatLocalDate(checkDate);
  if (!activeDates.has(todayStr)) {
    checkDate.setDate(checkDate.getDate() - 1);
  }

  for (let i = 0; i < 365; i++) {
    const dateStr = formatLocalDate(checkDate);
    if (activeDates.has(dateStr)) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

async function fetchContributions(username) {
  for (const buildUrl of CONTRIB_APIS) {
    try {
      const res = await fetch(buildUrl(username), {
        next: { revalidate: 3600 },
      });

      if (!res.ok) continue;

      const data = await res.json();

      if (data.contributions?.length) {
        return {
          contributions: data.contributions,
          totalContributions:
            data.totalContributions ??
            data.contributions.reduce((sum, day) => sum + (day.count || 0), 0),
        };
      }
    } catch {
      continue;
    }
  }

  return null;
}

async function fetchAllRepos(username, headers) {
  const repos = [];
  let page = 1;

  while (page <= 3) {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=updated&type=owner`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!res.ok) break;

    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;

    repos.push(...batch);
    if (batch.length < 100) break;
    page++;
  }

  return repos;
}

export async function GET() {
  const username = SITE.githubUsername;

  try {
    const headers = getGithubHeaders();

    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!userRes.ok) {
      return NextResponse.json(
        { error: "GitHub user not found" },
        { status: userRes.status === 404 ? 404 : 502 }
      );
    }

    const user = await userRes.json();
    const contribData = await fetchContributions(username);
    const repos = await fetchAllRepos(username, headers);

    const openSource = repos.filter((repo) => !repo.fork && !repo.private).length;
    const contributions = contribData?.contributions || [];

    const payload = {
      username,
      contributions,
      totalContributions:
        contribData?.totalContributions ??
        contributions.reduce((sum, day) => sum + (day.count || 0), 0),
      streak: calculateStreak(contributions),
      repositories: user.public_repos || 0,
      openSource: openSource || user.public_repos || 0,
      profileUrl: user.html_url || `https://github.com/${username}`,
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
