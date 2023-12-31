"use client";

import { useEffect, useState } from "react";
import { Time } from "./time";

export function Client() {
  const [time, setTime] = useState("");

  useEffect(() => {
    async function loadData() {
      const data = await fetch("/api/clock").then((res) => res.json());

      setTime(data.time);
    }

    void loadData();
  }, []);

  return (
    <div className="grid">
      <span>Client</span>
      <Time>{time}</Time>
    </div>
  );
}
