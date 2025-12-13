/**
 * Placeholder toolset composition for Mastra dynamic tools.
 * Replace the TODO sections with real MCP clients (Neon, Freestyle, etc.).
 */
export type Toolset = {
  name: string;
  description?: string;
  tools: unknown[];
};

export type ToolsetOptions = {
  freestyleToolset?: Toolset;
  neonToolset?: Toolset;
  extras?: Toolset[];
};

export function composeToolsets(opts: ToolsetOptions): Toolset[] {
  const toolsets: Toolset[] = [];
  if (opts.freestyleToolset) toolsets.push(opts.freestyleToolset);
  if (opts.neonToolset) toolsets.push(opts.neonToolset);
  if (opts.extras?.length) toolsets.push(...opts.extras);
  return toolsets;
}
