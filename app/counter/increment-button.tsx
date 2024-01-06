"use client";

import { useRef, useState } from "react";
import { increment } from "./increment";
import { revalidate } from "./revalidate";

export function IncrementButton(props: { timestamp: number }) {
  const [count, setCount] = useState(0);

  const interval = useRef<number>();

  async function handleClick() {
    if (interval.current) {
      setCount(0);
      window.clearInterval(interval.current);
    }

    await increment();

    interval.current = window.setInterval(() => {
      setCount((pre) => pre + 1);
    }, 1000);
  }

  return (
    <div className="grid gap-2">
      <button className="border-2 rounded" onClick={handleClick}>
        Increase
      </button>
      <button className="border-2 rounded" onClick={() => revalidate()}>
        Revalidate Path
      </button>

      <p>Time after click: {count}</p>
      <p>Timestamp: {props.timestamp}</p>
    </div>
  );
}
