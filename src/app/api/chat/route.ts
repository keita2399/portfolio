import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

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

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
        }),
      }
    );

    const data = await res.json();
    if (data.error) {
      console.error("Gemini API error:", data.error);
      return NextResponse.json(
        { error: "AIの応答に失敗しました" },
        { status: 500 }
      );
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "（応答なし）";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "エラーが発生しました" },
      { status: 500 }
    );
  }
}
