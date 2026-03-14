import { Bolt, Cpu, Database, LineChart, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { label: "Active Runs", value: "3", delta: "+2 vs yesterday", icon: PlayCircle },
  { label: "Queue Depth", value: "7", delta: "2 delayed", icon: LineChart },
  { label: "DB Branches", value: "12", delta: "Neon", icon: Database },
  { label: "Agent Uptime", value: "99.9%", delta: "last 24h", icon: Cpu },
];

export function HomePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-12">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Bolt className="h-4 w-4 text-blue-200" />
            Vite + React + Mastra + Neon Pipeline
          </div>
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            NEXA Agent Console
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Chat-driven generation with a Vite frontend, lightweight API services,
            BullMQ workers, and reusable Mastra packages.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="bg-white/10 text-white">
              Vite React
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white">
              Hono API
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white">
              Drizzle + Neon
            </Badge>
          </div>
        </div>

        <div className="flex gap-3">
          <Button asChild variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
            <Link to="/project">Open project</Link>
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
              <CardDescription className="text-xs text-blue-100/80">
                {metric.delta}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
