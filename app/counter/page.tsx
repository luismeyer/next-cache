import { kv } from "@vercel/kv";

import { IncrementButton } from "./increment-button";

export const revalidate = 10;

export default async function Counter() {
  const count = await kv.get<number>("counter");

  return (
    <div>
      <p>Count: {count}</p>

      <IncrementButton timestamp={Date.now()} />
    </div>
  );
}
