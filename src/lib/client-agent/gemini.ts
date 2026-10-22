// Browser client for Gemini API (optional: user can provide their own key in builder)
export const getKey = (): string => {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('gemini-api-key') || '';
};

export const setKey = (key: string): void => {
  if (typeof window === 'undefined') return;
  if (key) {
    localStorage.setItem('gemini-api-key', key.trim());
  } else {
    localStorage.removeItem('gemini-api-key');
  }
};

export const hasKey = (): boolean => !!getKey();

export interface ClientGenerateJsonOptions {
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
}: ClientGenerateJsonOptions): Promise<T> {
  const key = getKey();
  if (!key) {
    throw new Error('Gemini API key not found. Please provide an API key in settings or use Instant Demo mode.');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
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

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(json?.error?.message || `Gemini request failed: ${res.status}`);
  }

  const text = json.candidates?.[0]?.content?.parts?.map((p: any) => p.text || '').join('') || '';
  if (!text) {
    throw new Error('Empty model response received');
  }

  return JSON.parse(text) as T;
}

export const imagePart = (base64Data: string, mimeType: string) => ({
  inlineData: { mimeType, data: base64Data },
});
