"use client";

import { useMemo, useState } from "react";
import {
  Loader2,
  Send,
  Bolt,
  PanelRightOpen,
  Play,
  Sparkles,
  Orbit,
  Shield,
  Code,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useChatStore } from "@/lib/stores/chat-store";
import { useChatMutation } from "@/lib/queries/use-chat";

const agents = [
  { id: "codegen", name: "Codegen Agent", focus: "Full-stack Next + Neon", defaultOn: true },
  { id: "web-search", name: "Web Search Agent", focus: "Fresh info + citations", defaultOn: true },
  { id: "figma", name: "Figma Reviewer", focus: "Design review / HTML export" },
  { id: "city-sim", name: "City Sim", focus: "Memory-heavy sandbox" },
];

const tools = [
  { id: "tavily", name: "Tavily Search", note: "实时搜索", needs: "TAVILY_API_KEY" },
  { id: "figma", name: "Figma Reader", note: "设计树 + 图片", needs: "FIGMA_PERSONAL_ACCESS_TOKEN" },
  { id: "crypto", name: "CoinGecko", note: "行情查询" },
  { id: "image", name: "Gemini Image", note: "OpenRouter", needs: "OPENROUTER_API_KEY" },
];

const workflows = [
  { id: "example-workflow", name: "快速预览", detail: "格式化 + 强调文案", defaultOn: true },
  { id: "app-sprint", name: "应用冲刺", detail: "规划 -> Scaffold -> PR Draft" },
  { id: "qa-pass", name: "QA Pass", detail: "lint/typecheck/test 组合" },
];

function CollapsibleSection({
  title,
  badge,
  children,
  defaultOpen = true,
}: {
  title: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-3 py-2 text-sm text-white hover:bg-white/10"
      >
        <span className="flex items-center gap-2">
          <ChevronDown
            className={cn(
              "h-4 w-4 text-white/70 transition-transform",
              open ? "rotate-0" : "-rotate-90",
            )}
          />
          {title}
        </span>
        {badge}
      </button>
      {open && <div className="border-t border-white/10 p-3">{children}</div>}
    </div>
  );
}

type Message = {
  role: "user" | "agent";
  content: string;
};

export default function ChatPage() {
  const { projectId, modelId, messages, setProjectId, setModelId, reset, error, setError } =
    useChatStore();
  const [input, setInput] = useState("");
  const [selectedAgents, setSelectedAgents] = useState<string[]>(
    agents.filter((a) => a.defaultOn).map((a) => a.id),
  );
  const [selectedTools, setSelectedTools] = useState<string[]>(tools.map((t) => t.id).slice(0, 2));
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>("example-workflow");
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

  const toggleItem = (value: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(value) ? list.filter((id) => id !== value) : [...list, value]);
  };

  return (
    <main className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-10 lg:px-12">
      <div className="grid gap-4 lg:grid-cols-[280px_420px_minmax(0,1fr)]">
        {/* Left: selections */}
        <Card className="border-white/10 bg-white/5 text-white">
          <CardHeader className="space-y-2">
            <CardTitle className="flex items-center gap-2">
              <Orbit className="h-5 w-5 text-blue-200" />
              选择能力
            </CardTitle>
            <CardDescription className="text-white/70">
              勾选参与的 Agent / Tool / Workflow。无需写代码，直接组合。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CollapsibleSection
              title="Agents"
              badge={
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">
                  {selectedAgents.length} 选中
                </span>
              }
            >
              <div className="flex flex-col gap-2">
                {agents.map((agent) => {
                  const active = selectedAgents.includes(agent.id);
                  return (
                    <button
                      key={agent.id}
                      onClick={() => toggleItem(agent.id, selectedAgents, setSelectedAgents)}
                      className={cn(
                        "flex items-start justify-between rounded-lg border px-3 py-2 text-left transition",
                        active
                          ? "border-blue-400/40 bg-blue-300/10 shadow-[0_0_0_1px_rgba(96,165,250,0.4)]"
                          : "border-white/10 bg-white/5 hover:border-white/20",
                      )}
                    >
                      <div>
                        <div className="text-sm font-medium">{agent.name}</div>
                        <div className="text-xs text-white/70">{agent.focus}</div>
                      </div>
                      {active && <CheckCircle2 className="h-4 w-4 text-blue-200" />}
                    </button>
                  );
                })}
              </div>
            </CollapsibleSection>

            <CollapsibleSection
              title="Tools"
              badge={
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">
                  {selectedTools.length} 选中
                </span>
              }
            >
              <div className="flex flex-col gap-2">
                {tools.map((tool) => {
                  const active = selectedTools.includes(tool.id);
                  return (
                    <button
                      key={tool.id}
                      onClick={() => toggleItem(tool.id, selectedTools, setSelectedTools)}
                      className={cn(
                        "flex items-start justify-between rounded-lg border px-3 py-2 text-left transition",
                        active
                          ? "border-emerald-300/40 bg-emerald-300/10 shadow-[0_0_0_1px_rgba(52,211,153,0.4)]"
                          : "border-white/10 bg-white/5 hover:border-white/20",
                      )}
                    >
                      <div>
                        <div className="text-sm font-medium">{tool.name}</div>
                        <div className="text-xs text-white/70">{tool.note}</div>
                        {tool.needs && (
                          <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                            <Shield className="h-3 w-3" />
                            {tool.needs}
                          </div>
                        )}
                      </div>
                      {active && <CheckCircle2 className="h-4 w-4 text-emerald-200" />}
                    </button>
                  );
                })}
              </div>
            </CollapsibleSection>

            <CollapsibleSection
              title="Workflow"
              badge={<span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">单选</span>}
            >
              <div className="flex flex-col gap-2">
                {workflows.map((flow) => {
                  const active = selectedWorkflow === flow.id;
                  return (
                    <button
                      key={flow.id}
                      onClick={() => setSelectedWorkflow(flow.id)}
                      className={cn(
                        "flex items-start justify-between rounded-lg border px-3 py-2 text-left transition",
                        active
                          ? "border-orange-300/50 bg-orange-300/10 shadow-[0_0_0_1px_rgba(253,186,116,0.5)]"
                          : "border-white/10 bg-white/5 hover:border-white/20",
                      )}
                    >
                      <div>
                        <div className="text-sm font-medium">{flow.name}</div>
                        <div className="text-xs text-white/70">{flow.detail}</div>
                      </div>
                      {active && <CheckCircle2 className="h-4 w-4 text-orange-200" />}
                    </button>
                  );
                })}
              </div>
            </CollapsibleSection>

            <div className="rounded-lg border border-dashed border-white/10 bg-white/5 p-3 text-xs text-white/70">
              会话会携带：项目 ID、模型、选中的 Agent/Tool/Workflow，并在后台 Nest → Mastra
              里运行。无需打开编辑器，即可在右侧预览。
            </div>
          </CardContent>
        </Card>

        {/* Middle: chat */}
        <Card className="border-white/10 bg-[#0f172a]/70 text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Bolt className="h-5 w-5 text-blue-200" />
                聊天指令
              </CardTitle>
              <CardDescription className="text-white/70">
                直接描述要做的功能，后台根据选中能力自动组装。
              </CardDescription>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
              <PanelRightOpen className="h-4 w-4" />
              实时预览
            </div>
          </CardHeader>
          <CardContent className="flex h-[620px] flex-col gap-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs text-white/70">Project ID</label>
                <Input
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  placeholder="UUID (Neon branch/project)"
                  className="bg-white/10 text-white placeholder:text-white/60"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-white/70">Model (optional)</label>
                <Input
                  value={modelId}
                  onChange={(e) => setModelId(e.target.value)}
                  placeholder="例如 gpt-4o-mini"
                  className="bg-white/10 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-white/70">
              <Badge variant="secondary" className="bg-white/10 text-white">
                Agents: {selectedAgents.length}
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white">
                Tools: {selectedTools.length}
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white">
                Workflow: {selectedWorkflow}
              </Badge>
            </div>

            <div className="flex-1 space-y-3 overflow-hidden rounded-lg border border-white/5 bg-white/[0.03]">
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 text-xs text-white/70">
                <span>对话 / 状态</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5">
                  <Play className="h-3.5 w-3.5 text-emerald-200" />
                  Nest → Mastra → Toolsets
                </span>
              </div>
              <div className="flex-1 space-y-3 overflow-y-auto px-4 pb-4 pt-2">
                {messages.length === 0 && (
                  <div className="text-sm text-white/60">
                    还没有消息。试试：“帮我生成一个 SaaS Landing（Hero+Pricing+CTA），部署到 Neon/Drizzle
                    后端，API 支持 /users CRUD。”
                  </div>
                )}
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
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
                onChange={(e) => setInput(e.target.value)}
                placeholder="描述你要的功能、界面或数据，直接用自然语言。"
                className="min-h-[140px] bg-white/10 text-white placeholder:text-white/60"
              />
              <div className="flex items-center justify-between text-xs text-white/60">
                <div className="inline-flex items-center gap-2">
                  <Play className="h-4 w-4 text-blue-200" />
                  后台异步执行，结果同步到右侧预览。
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
              {error && <p className="text-xs text-red-300">{error}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Right: IDE-like preview */}
        <Card className="border-white/10 bg-gradient-to-b from-[#0b1224] to-[#0c152c] text-white">
          <CardHeader className="space-y-2">
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-emerald-200" />
              预览 / IDE
            </CardTitle>
            <CardDescription className="text-white/70">
              显示计划、文件列表和生成的代码片段。无需真正打开编辑器。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs">
              <div className="flex items-center gap-2 text-white/80">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Plan ready · {selectedWorkflow}
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-white/10 text-white">
                  {selectedAgents.length} Agents
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white">
                  {selectedTools.length} Tools
                </Badge>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0e1a33] p-3">
              <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                <span>Files</span>
                <span className="rounded-full bg-white/5 px-2 py-0.5">Updated</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-3">
                <ul className="space-y-1 text-xs text-white/70">
                  <li className="rounded-md bg-white/5 px-2 py-1 text-white">app/page.tsx</li>
                  <li className="rounded-md bg-white/0 px-2 py-1 hover:bg-white/5">
                    app/api/users/route.ts
                  </li>
                  <li className="rounded-md bg-white/0 px-2 py-1 hover:bg-white/5">
                    db/schema/users.ts
                  </li>
                  <li className="rounded-md bg-white/0 px-2 py-1 hover:bg-white/5">
                    components/ui/button.tsx
                  </li>
                </ul>
                <div className="rounded-md border border-white/10 bg-black/50 p-3 font-mono text-xs leading-6 text-emerald-50 shadow-inner">
                  <div className="mb-2 flex items-center justify-between text-[11px] text-white/60">
                    <span>app/page.tsx</span>
                    <span>Preview</span>
                  </div>
                  <pre className="whitespace-pre-wrap text-[11px] text-emerald-50">
                    {`export default function Page() {
  return (
    <section className="mx-auto max-w-4xl py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Landing for your SaaS</h1>
        <p className="text-slate-300">Auth + Neon + shadcn/ui ready.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <button className="rounded-lg bg-emerald-500 px-4 py-3 text-black">
          Get started
        </button>
        <div className="rounded-lg border border-white/10 p-3 text-slate-200">
          Neon branch provisioned · Drizzle schema synced.
        </div>
      </div>
    </section>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-white/80">
              <div className="mb-2 flex items-center gap-2 text-white">
                <Sparkles className="h-4 w-4 text-blue-200" />
                下一步
              </div>
              <ul className="space-y-1">
                <li>· 调整组件配色或文案，可继续在聊天框说明。</li>
                <li>· 如果要落地，后端会同时更新 Neon/Drizzle 迁移。</li>
                <li>· 需要更多 workflow 模板？后续可在这里一键加载。</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
