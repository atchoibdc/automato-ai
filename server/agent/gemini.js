// Minimal Gemini REST client (structured JSON output, vision input). The API key never leaves the server.
const MODEL = () => process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const hasKey = () => !!process.env.GEMINI_API_KEY;
export const isMock = () => process.env.AGENT_MOCK === '1';

/**
 * @param {object} o
 * @param {string} o.system   system instruction
 * @param {Array}  o.parts    [{text} | {inlineData:{mimeType,data}}]
 * @param {object} o.schema   Gemini responseSchema (OpenAPI subset)
 * @returns parsed JSON
 */
export async function generateJson({ system, parts, schema, temperature = 0.2, maxTokens = 8192 }) {
  if (!hasKey()) {
    const e = new Error('GEMINI_API_KEY is not set. Add it to .env (see .env.example).');
    e.status = 503;
    throw e;
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL()}:generateContent`;
  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: 'user', parts }],
    generationConfig: { temperature, maxOutputTokens: maxTokens, responseMimeType: 'application/json', responseSchema: schema },
  };
  let lastErr;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY },
        body: JSON.stringify(body),
      });
      if (res.status === 429 || res.status >= 500) throw Object.assign(new Error(`Gemini ${res.status}`), { retry: true });
      const json = await res.json();
      if (!res.ok) throw Object.assign(new Error(json?.error?.message || `Gemini ${res.status}`), { status: 502 });
      const text = json.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('') || '';
      if (!text) throw Object.assign(new Error(`Empty model response (${json.candidates?.[0]?.finishReason || 'unknown'})`), { retry: true });
      return JSON.parse(text);
    } catch (err) {
      lastErr = err;
      if (!(err.retry || err instanceof SyntaxError)) break;
      await sleep(800 * 2 ** attempt);
    }
  }
  lastErr.status ||= 502;
  throw lastErr;
}

export const imagePart = (buffer, mimeType) => ({ inlineData: { mimeType, data: buffer.toString('base64') } });
