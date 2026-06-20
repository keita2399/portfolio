import { NextRequest, NextResponse } from "next/server";
import { logUsage } from "@/lib/logUsage";
import { ai, GEMINI_MODEL } from "@/lib/gemini";

type Message = { role: "user" | "model"; parts: [{ text: string }] };

const SYSTEM_PROMPT = `あなたはアプリ開発・プログラミングのアイデア相談相手です。
ユーザーとカジュアルに会話しながら、アイデアを具体化する手助けをしてください。
短めの返答を心がけてください（チャットでの会話なので）。
これは LINE Claude Sync のデモです。実際の製品ではLINEからメッセージを送り、
PCのClaude Code CLIと自動で会話ログが共有されます。`;

// セッションごとのメッセージ上限
const MAX_MESSAGES_PER_SESSION = 20;

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { messages } = (await req.json()) as {
      messages: { role: string; content: string }[];
    };

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "メッセージがありません" },
        { status: 400 }
      );
    }

    // デモ上限チェック
    const userMessages = messages.filter((m) => m.role === "user");
    if (userMessages.length > MAX_MESSAGES_PER_SESSION) {
      return NextResponse.json(
        {
          error: `デモは${MAX_MESSAGES_PER_SESSION}往復までです。実際の製品ではLINEから無制限に利用できます。`,
        },
        { status: 429 }
      );
    }

    // Gemini 形式に変換
    const contents: Message[] = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const res = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });

    if (!res.text) {
      return NextResponse.json({ error: "AIの応答に失敗しました" }, { status: 500 });
    }

    logUsage({
      project: "portfolio",
      model: GEMINI_MODEL,
      inputTokens: res.usageMetadata?.promptTokenCount ?? 0,
      outputTokens: res.usageMetadata?.candidatesTokenCount ?? 0,
    });

    return NextResponse.json({ reply: res.text });
  } catch (err: unknown) {
    console.error("Chat API error:", err);
    // 429 rate limit
    if (err instanceof Error && err.message.includes("429")) {
      return NextResponse.json(
        { error: "Gemini APIの無料枠を超えたため、現在利用できません。時間をおいて再度お試しください。" },
        { status: 429 }
      );
    }
    return NextResponse.json(
      { error: "エラーが発生しました" },
      { status: 500 }
    );
  }
}
