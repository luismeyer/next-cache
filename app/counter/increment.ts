"use server";

import { kv } from "@vercel/kv";

export async function increment() {
  await kv.incr("counter");
}
