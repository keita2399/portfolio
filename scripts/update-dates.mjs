#!/usr/bin/env node
/**
 * prebuild script: GitHub API から各リポジトリの最終push日を取得し、
 * projects.ts の updatedAt を自動更新する。
 *
 * 使い方: node scripts/update-dates.mjs
 * 環境変数: GITHUB_TOKEN（オプション、レート制限緩和用）
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECTS_FILE = join(__dirname, "../src/data/projects.ts");

async function fetchPushedAt(repo) {
  const headers = { "Accept": "application/vnd.github.v3+json" };
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });
    if (!res.ok) {
      console.warn(`  ⚠ ${repo}: ${res.status} ${res.statusText}`);
      return null;
    }
    const data = await res.json();
    // pushed_at: "2026-03-28T04:44:19Z" → "2026-03-28"
    return data.pushed_at?.split("T")[0] || null;
  } catch (e) {
    console.warn(`  ⚠ ${repo}: ${e.message}`);
    return null;
  }
}

async function main() {
  console.log("📅 Updating project dates from GitHub...\n");

  let content = readFileSync(PROJECTS_FILE, "utf-8");

  // githubRepo: "owner/repo" を持つプロジェクトを全て抽出
  const repoPattern = /githubRepo:\s*"([^"]+)"/g;
  const repos = new Set();
  let match;
  while ((match = repoPattern.exec(content)) !== null) {
    repos.add(match[1]);
  }

  // 各リポジトリの最終push日を取得（重複排除）
  const dateMap = new Map();
  for (const repo of repos) {
    const date = await fetchPushedAt(repo);
    if (date) {
      dateMap.set(repo, date);
      console.log(`  ✓ ${repo} → ${date}`);
    }
  }

  // projects.ts を更新: githubRepo の直前の updatedAt を書き換え
  const lines = content.split("\n");
  const result = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // updatedAt行で、次の行がgithubRepoなら日付を更新
    if (trimmed.startsWith("updatedAt:") && i + 1 < lines.length) {
      const nextLine = lines[i + 1].trim();
      const repoMatch = nextLine.match(/githubRepo:\s*"([^"]+)"/);
      if (repoMatch && dateMap.has(repoMatch[1])) {
        const newDate = dateMap.get(repoMatch[1]);
        result.push(line.replace(/updatedAt:\s*"[^"]*"/, `updatedAt: "${newDate}"`));
        continue;
      }
    }

    result.push(line);
  }

  writeFileSync(PROJECTS_FILE, result.join("\n"), "utf-8");
  console.log(`\n✅ Updated ${dateMap.size} project dates.`);
}

main().catch(console.error);
