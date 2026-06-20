import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { logUsage } from "@/lib/logUsage";
import { ai, GEMINI_MODEL } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  if (!process.env.GEMINI_API_KEY && process.env.GEMINI_BACKEND !== "vertex") {
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

    const contents: { role: "user" | "model"; parts: [{ text: string }] }[] = [];
    if (history && Array.isArray(history)) {
      for (const msg of history.slice(-10)) {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        });
      }
    }
    contents.push({ role: "user", parts: [{ text: message }] });

    const result = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    });

    if (!result.text) {
      return NextResponse.json({ error: "No response from AI" }, { status: 502 });
    }

    logUsage({
      project: "portfolio",
      model: GEMINI_MODEL,
      inputTokens: result.usageMetadata?.promptTokenCount ?? 0,
      outputTokens: result.usageMetadata?.candidatesTokenCount ?? 0,
    });

    return NextResponse.json({ reply: result.text });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
