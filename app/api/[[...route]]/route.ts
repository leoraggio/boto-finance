import { Hono } from "hono";
import { handle } from "hono/vercel";

import accounts from "./accounts";

export const runtime = "edge";

const app = new Hono().basePath("/api").route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);
export const PATH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof app;
