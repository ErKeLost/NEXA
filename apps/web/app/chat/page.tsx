"use client";

import { useMemo, useState } from "react";
import { Loader2, Send, Bolt, PanelRightOpen, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useChatStore } from "@/lib/stores/chat-store";
import { useChatMutation } from "@/lib/queries/use-chat";

type Message = {
  role: "user" | "agent";
  content: string;
};

export default function ChatPage() {
  const { projectId, modelId, messages, setProjectId, setModelId, reset, error, setError } =
    useChatStore();
  const [input, setInput] = useState("");
  const mutation = useChatMutation();

  const canSend = useMemo(
    () => projectId.trim().length > 0 && input.trim().length > 0 && !mutation.isPending,
    [projectId, input, mutation.isPending],
  );

  const send = () => {
    if (!canSend) return;
    setError(null);
    mutation.mutate({
      projectId,
      prompt: input,
      modelId: modelId || undefined,
    });
    setInput("");
  };

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:px-12">
      <header className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <Bolt className="h-4 w-4 text-blue-200" />
          Agent chat · Mastra runtime
        </div>
        <h1 className="text-3xl font-semibold text-white">Chat-driven build</h1>
        <p className="text-sm text-white/70">
          Talk to the codegen agent. It uses your project context (Neon + Drizzle + shadcn/ui) and runs entirely on the Nest backend.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-[340px_1fr]">
        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader>
            <CardTitle>Context</CardTitle>
            <CardDescription className="text-white/70">
              Select project and optional model override before sending.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-white/80">Project ID</label>
              <Input
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                placeholder="UUID (Neon branch/project)"
                className="bg-white/10 text-white placeholder:text-white/60"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/80">Model (optional)</label>
              <Input
                value={modelId}
                onChange={(e) => setModelId(e.target.value)}
                placeholder="e.g. gpt-4o-mini"
                className="bg-white/10 text-white placeholder:text-white/60"
              />
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-white/70">
              <Badge variant="secondary" className="bg-white/10 text-white">
                Drizzle + Neon
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white">
                shadcn/ui
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white">
                Freestyle Deploy
              </Badge>
            </div>
            <div className="rounded-lg border border-dashed border-white/10 bg-white/5 p-3 text-xs text-white/70">
              Agent runs server-side via Nest → Mastra → toolsets. Responses will stream here after queue submission.
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-[#0f172a]/70 text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
              <CardTitle>Conversation</CardTitle>
              <CardDescription className="text-white/70">
                Messages are relayed to the backend `/chat` controller.
              </CardDescription>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
              <PanelRightOpen className="h-4 w-4" />
              Live
            </div>
          </CardHeader>
          <CardContent className="flex h-[520px] flex-col gap-4">
            <div className="flex-1 space-y-3 overflow-y-auto rounded-lg border border-white/5 bg-white/[0.03] p-4">
              {messages.length === 0 && (
                <div className="text-sm text-white/60">
                  No messages yet. Describe the feature you want (UI + API + DB), and the agent will respond with a plan and code steps.
                </div>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-sm backdrop-blur",
                    msg.role === "user"
                      ? "border-blue-300/30 bg-blue-200/10 text-blue-50"
                      : "border-white/10 bg-white/5 text-white"
                  )}
                >
                  <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide">
                    <span className="rounded bg-black/30 px-2 py-0.5">
                      {msg.role === "user" ? "You" : "Agent"}
                    </span>
                  </div>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for a dashboard, CRUD API, or schema change..."
                className="min-h-[120px] bg-white/10 text-white placeholder:text-white/60"
              />
              <div className="flex items-center justify-between text-xs text-white/60">
                <div className="inline-flex items-center gap-2">
                  <Play className="h-4 w-4 text-blue-200" />
                  Runs asynchronously on the backend (Nest + BullMQ ready).
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    className="border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    onClick={() => {
                      reset();
                      setInput("");
                    }}
                    type="button"
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={send}
                    disabled={!canSend}
                    className="bg-blue-500 hover:bg-blue-500/90 text-white"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Running
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send
                      </>
                    )}
                  </Button>
                </div>
              </div>
              {error && <p className="text-xs text-red-300">{error}</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
