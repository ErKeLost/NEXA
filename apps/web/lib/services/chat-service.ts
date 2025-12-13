export type ChatRequest = {
  projectId: string;
  prompt: string;
  modelId?: string;
};

export type ChatResponse = {
  text?: string;
  raw?: unknown;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ??
  "http://localhost:3001";

export async function sendChat(req: ChatRequest): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }

  return (await res.json()) as ChatResponse;
}
