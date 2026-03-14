import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "./config.js";
import * as schema from "./schema.js";

const client = neon(env.NEON_DATABASE_URL);

export const db = drizzle(client, { schema });
