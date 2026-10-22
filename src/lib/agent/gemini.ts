// Minimal Gemini REST client (structured JSON output, vision input).
// The API key never leaves the server.
const MODEL = () => process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const hasKey = () => !!process.env.GEMINI_API_KEY;
export const isMock = () => process.env.AGENT_MOCK === '1';

export interface GenerateJsonOptions {
  system: string;
  parts: Array<{ text?: string; inlineData?: { mimeType: string; data: string } }>;
  schema: Record<string, unknown>;
  temperature?: number;
  maxTokens?: number;
}

export async function generateJson<T = any>({
  system,
  parts,
  schema,
  temperature = 0.2,
  maxTokens = 8192,
}: GenerateJsonOptions): Promise<T> {
  if (!hasKey()) {
    const e = Object.assign(new Error('GEMINI_API_KEY is not set. Add it to .env or .env.local (see .env.example).'), {
      status: 503,
    });
    throw e;
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL()}:generateContent`;
  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: 'user', parts }],
    generationConfig: {
      temperature,
      maxOutputTokens: maxTokens,
      responseMimeType: 'application/json',
      responseSchema: schema,
    },
  };

  let lastErr: any;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY!,
        },
        body: JSON.stringify(body),
      });

      if (res.status === 429 || res.status >= 500) {
        throw Object.assign(new Error(`Gemini ${res.status}`), { retry: true });
      }

      const json = await res.json();
      if (!res.ok) {
        throw Object.assign(new Error(json?.error?.message || `Gemini ${res.status}`), { status: 502 });
      }

      const text = json.candidates?.[0]?.content?.parts?.map((p: any) => p.text || '').join('') || '';
      if (!text) {
        throw Object.assign(
          new Error(`Empty model response (${json.candidates?.[0]?.finishReason || 'unknown'})`),
          { retry: true }
        );
      }

      return JSON.parse(text) as T;
    } catch (err: any) {
      lastErr = err;
      if (!(err.retry || err instanceof SyntaxError)) break;
      await sleep(800 * 2 ** attempt);
    }
  }

  if (lastErr) lastErr.status = lastErr.status || 502;
  throw lastErr;
}

export const imagePart = (buffer: Buffer, mimeType: string) => ({
  inlineData: { mimeType, data: buffer.toString('base64') },
});
