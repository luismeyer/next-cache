"use client";

import { useEffect, useState } from "react";
import { Time } from "./time";

export function Client({ timezone }: { timezone?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    async function loadData() {
      const param = timezone ? `/${timezone}` : "";

      const data = await fetch(`/api/clock${param}`).then((res) => res.json());

      setTime(data.time);
    }

    void loadData();
  }, [timezone]);

  return (
    <div className="grid">
      <span>Client</span>
      <Time>{time}</Time>
    </div>
  );
}
