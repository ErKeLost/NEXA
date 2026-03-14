import { useMemo, useState } from "react";
import { Bolt, CheckCircle2, Code, Loader2, Orbit, Play, Send, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useChatMutation } from "@/lib/queries/use-chat";
import { useChatStore } from "@/lib/stores/chat-store";

const tools = [
  { id: "tavily", name: "Tavily Search", note: "实时搜索", needs: "TAVILY_API_KEY" },
  { id: "figma", name: "Figma Reader", note: "设计树 + 图片", needs: "FIGMA_PERSONAL_ACCESS_TOKEN" },
  { id: "crypto", name: "CoinGecko", note: "行情查询" },
];

export function ProjectPage() {
  const { projectId, modelId, messages, setProjectId, setModelId, reset, error, setError } =
    useChatStore();
  const mutation = useChatMutation();
  const [input, setInput] = useState("");
  const [selectedTools, setSelectedTools] = useState<string[]>(tools.slice(0, 2).map((tool) => tool.id));

  const canSend = useMemo(
    () => projectId.trim().length > 0 && input.trim().length > 0 && !mutation.isPending,
    [input, mutation.isPending, projectId],
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
    <main className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-10 lg:px-12">
      <div className="grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader className="space-y-2">
            <CardTitle className="flex items-center gap-2">
              <Orbit className="h-5 w-5 text-blue-200" />
              Workspace Control
            </CardTitle>
            <CardDescription className="text-white/70">
              Frontend 已切到 Vite。这里保留项目、模型和工具开关。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-white/70">Project ID</label>
              <Input
                value={projectId}
                onChange={(event) => setProjectId(event.target.value)}
                placeholder="UUID (project / branch)"
                className="bg-white/10 text-white placeholder:text-white/60"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/70">Model</label>
              <Input
                value={modelId}
                onChange={(event) => setModelId(event.target.value)}
                placeholder="gpt-4o-mini"
                className="bg-white/10 text-white placeholder:text-white/60"
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs text-white/70">Enabled Tools</div>
              {tools.map((tool) => {
                const active = selectedTools.includes(tool.id);
                return (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() =>
                      setSelectedTools((current) =>
                        current.includes(tool.id)
                          ? current.filter((item) => item !== tool.id)
                          : [...current, tool.id],
                      )
                    }
                    className={cn(
                      "flex w-full items-start justify-between rounded-lg border px-3 py-2 text-left transition",
                      active
                        ? "border-emerald-300/40 bg-emerald-300/10 shadow-[0_0_0_1px_rgba(52,211,153,0.4)]"
                        : "border-white/10 bg-white/5 hover:border-white/20",
                    )}
                  >
                    <div>
                      <div className="text-sm font-medium">{tool.name}</div>
                      <div className="text-xs text-white/70">{tool.note}</div>
                      {tool.needs ? (
                        <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                          <Shield className="h-3 w-3" />
                          {tool.needs}
                        </div>
                      ) : null}
                    </div>
                    {active ? <CheckCircle2 className="h-4 w-4 text-emerald-200" /> : null}
                  </button>
                );
              })}
            </div>

            <div className="rounded-lg border border-dashed border-white/10 bg-white/5 p-3 text-xs text-white/70">
              当前结构是 Vite Web + plain API + worker。后面要切 Void Cloud 时，这层前端可以直接继续复用。
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
          <Card className="border-white/10 bg-[#0f172a]/70 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Bolt className="h-5 w-5 text-blue-200" />
                  Chat Command
                </CardTitle>
                <CardDescription className="text-white/70">
                  用自然语言描述功能，后端通过 `@nexa/mastra` 执行。
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-white/10 text-white">
                Vite UI
              </Badge>
            </CardHeader>
            <CardContent className="flex h-[680px] flex-col gap-4">
              <div className="flex flex-wrap gap-2 text-xs text-white/70">
                <Badge variant="secondary" className="bg-white/10 text-white">
                  Tools: {selectedTools.length}
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white">
                  API: {import.meta.env.VITE_API_BASE_URL || "http://localhost:3001"}
                </Badge>
              </div>

              <div className="flex-1 space-y-3 overflow-hidden rounded-lg border border-white/5 bg-white/[0.03]">
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 text-xs text-white/70">
                  <span>Conversation</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5">
                    <Play className="h-3.5 w-3.5 text-emerald-200" />
                    API → Queue → Worker → Mastra
                  </span>
                </div>
                <div className="flex-1 space-y-3 overflow-y-auto px-4 pb-4 pt-2">
                  {messages.length === 0 ? (
                    <div className="text-sm text-white/60">
                      还没有消息。试试：
                      “帮我生成一个 SaaS landing，前端 Vite React，后端保留 Drizzle/Neon。”
                    </div>
                  ) : null}
                  {messages.map((msg, index) => (
                    <div
                      key={`${msg.role}-${index}`}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-sm backdrop-blur",
                        msg.role === "user"
                          ? "border-blue-300/30 bg-blue-200/10 text-blue-50"
                          : "border-white/10 bg-white/5 text-white",
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
              </div>

              <div className="space-y-2">
                <Textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="描述你要的功能、界面或数据，直接用自然语言。"
                  className="min-h-[140px] bg-white/10 text-white placeholder:text-white/60"
                />
                <div className="flex items-center justify-between text-xs text-white/60">
                  <div>结果会从新的 API 服务返回，worker 异步消费 runs 队列。</div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="ghost"
                      className="border border-white/10 bg-white/5 text-white hover:bg-white/10"
                      onClick={() => {
                        reset();
                        setInput("");
                      }}
                    >
                      Reset
                    </Button>
                    <Button
                      type="button"
                      onClick={send}
                      disabled={!canSend}
                      className="bg-blue-500 text-white hover:bg-blue-500/90"
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
                {error ? <p className="text-xs text-red-300">{error}</p> : null}
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-gradient-to-b from-[#0b1224] to-[#0c152c] text-white">
            <CardHeader className="space-y-2">
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-emerald-200" />
                Preview
              </CardTitle>
              <CardDescription className="text-white/70">
                这里展示当前迁移后的骨架重点，不再依赖 Next.js 目录约定。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-xs text-white/75">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="mb-2 text-white">Current app layout</div>
                <ul className="space-y-1">
                  <li>apps/web/src/App.tsx</li>
                  <li>apps/api/src/index.ts</li>
                  <li>apps/worker/src/index.ts</li>
                  <li>packages/mastra/*</li>
                </ul>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/40 p-3 font-mono leading-6 text-emerald-50">
                {`pnpm dev:web
pnpm dev:api
pnpm dev:worker

POST /chat
POST /runs
GET  /runs/:id`}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
