import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { logUsage } from "@/lib/logUsage";

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    const { message, history } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "message is required" }, { status: 400 });
    }

    const profilePath = path.join(process.cwd(), "data", "profile.md");
    const profile = fs.readFileSync(profilePath, "utf-8");

    const systemPrompt = `あなたはポートフォリオサイトのアシスタントAIです。
以下のプロフィール情報をもとに、訪問者の質問に日本語で丁寧に答えてください。

ルール:
- プロフィールに書かれている情報を正確に伝える
- プロフィールにない情報を聞かれたら「詳しくはお問い合わせフォームからご連絡ください」と答える
- 技術的な質問には具体的なプロジェクト事例を交えて回答する
- 簡潔に、しかし親しみやすく答える（チャットなので3-5文程度）
- 嘘や推測はしない
- Markdownの記法（**太字**、*リスト*、#見出し等）は絶対に使わない。プレーンテキストのみで回答する
- 箇条書きにする場合は「・」を使う

=== プロフィール情報 ===
${profile}`;

    const contents = [];
    if (history && Array.isArray(history)) {
      for (const msg of history.slice(-10)) {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        });
      }
    }
    contents.push({ role: "user", parts: [{ text: message }] });

    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      return NextResponse.json({ error: "AI API error" }, { status: 502 });
    }

    const result = await response.json();
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return NextResponse.json({ error: "No response from AI" }, { status: 502 });
    }

    logUsage({ project: "portfolio", model: "gemini-2.5-flash", inputTokens: result.usageMetadata?.promptTokenCount ?? 0, outputTokens: result.usageMetadata?.candidatesTokenCount ?? 0 });

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
