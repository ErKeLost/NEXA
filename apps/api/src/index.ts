import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { runCodegenJob } from "@nexa/mastra";
import { env } from "./config.js";
import { db } from "./db.js";
import { runQueue } from "./queue.js";
import { projects, runs } from "./schema.js";

const app = new Hono();

const chatSchema = z.object({
  projectId: z.string().uuid(),
  prompt: z.string().min(1),
  modelId: z.string().optional()
});

const createRunSchema = z.object({
  projectId: z.string().uuid(),
  prompt: z.string().min(1),
  model: z.string().optional()
});

app.use("*", cors());

app.get("/", (context) => {
  return context.json({
    ok: true,
    service: "nexa-api"
  });
});

app.get("/health", (context) => {
  return context.json({
    ok: true,
    uptime: process.uptime()
  });
});

app.get("/chat/projects/:projectId", async (context) => {
  const projectId = context.req.param("projectId");
  const [project] = await db.select().from(projects).where(eq(projects.id, projectId));

  if (!project) {
    return context.json({ message: "Project not found" }, 404);
  }

  return context.json({ ok: true, project });
});

app.post("/chat", async (context) => {
  const body = await context.req.json();
  const dto = chatSchema.parse(body);

  const [project] = await db.select().from(projects).where(eq(projects.id, dto.projectId));
  if (!project) {
    return context.json({ message: "Project not found" }, 404);
  }

  const result = await runCodegenJob({
    prompt: dto.prompt,
    projectId: dto.projectId,
    projectName: project.name,
    modelId: dto.modelId
  });

  return context.json({
    text: result.text ?? null,
    raw: result.raw ?? null
  });
});

app.post("/runs", async (context) => {
  const body = await context.req.json();
  const dto = createRunSchema.parse(body);

  const insertedRuns = await db
    .insert(runs)
    .values({
      projectId: dto.projectId,
      prompt: dto.prompt,
      model: dto.model ?? null
    })
    .returning();

  const run = insertedRuns[0];
  if (!run) {
    throw new Error("Failed to create run");
  }

  await runQueue.add(
    "execute",
    {
      runId: run.id,
      projectId: dto.projectId,
      prompt: dto.prompt,
      model: dto.model
    },
    {
      removeOnComplete: true
    }
  );

  return context.json({ id: run.id, status: run.status });
});

app.get("/runs/:id", async (context) => {
  const runId = context.req.param("id");
  const [run] = await db.select().from(runs).where(eq(runs.id, runId));

  if (!run) {
    return context.json({ message: "Run not found" }, 404);
  }

  return context.json(run);
});

serve(
  {
    fetch: app.fetch,
    port: env.PORT
  },
  (info) => {
    console.log(`nexa-api listening on http://localhost:${info.port}`);
  }
);
