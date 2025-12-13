"use client";

import { Bolt, Cpu, Database, PlayCircle, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

const metrics = [
  { label: "Active Runs", value: "3", delta: "+2 vs yesterday", icon: PlayCircle },
  { label: "Queue Depth", value: "7", delta: "2 delayed", icon: LineChart },
  { label: "DB Branches", value: "12", delta: "Neon", icon: Database },
  { label: "Agent Uptime", value: "99.9%", delta: "last 24h", icon: Cpu },
];

const tasks = [
  {
    title: "Chat-driven build",
    description: "Prototype new feature from prompt, track run and artifacts.",
    href: "/chat",
    cta: "Open chat",
  },
  {
    title: "Run queue",
    description: "Inspect queued/active runs, restart or cancel jobs.",
    href: "/runs",
    cta: "View runs",
  },
  {
    title: "Projects",
    description: "Manage Neon branches, secrets, and deployments.",
    href: "/projects",
    cta: "Manage",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-12">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Bolt className="h-4 w-4 text-blue-200" />
            Mastra + Next.js + Neon Pipeline
          </div>
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            NEXA Agent Console
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Chat-driven full-stack generation with shadcn/ui, Drizzle ORM, and Neon. Trigger runs from CLI or UI, stream results, and ship previews with Freestyle.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="bg-white/10 text-white">
              Next 16 App Router
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white">
              Mastra Orchestration
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white">
              Drizzle + Neon
            </Badge>
          </div>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
            <Link href="/chat">Chat with Agent</Link>
          </Button>
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5">
            <Link href="/runs">View Runs</Link>
          </Button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="border-white/10 bg-white/5 text-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-white/70">{metric.label}</CardTitle>
              <metric.icon className="h-5 w-5 text-blue-200" />
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="text-2xl font-semibold">{metric.value}</div>
              <CardDescription className="text-xs text-blue-100/80">{metric.delta}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {tasks.map((task) => (
          <Card key={task.title} className="border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
              <CardDescription className="text-white/70">{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className={cn("text-white hover:bg-white/10")}>
                <Link href={task.href}>{task.cta}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
