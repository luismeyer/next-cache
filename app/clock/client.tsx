"use client";

import { useEffect, useState } from "react";

export function Client({ timezone }: { timezone?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    async function loadData() {
      const param = timezone ? `/${timezone}` : "";

      const data = await fetch(`/api/clock${param}`).then((res) => res.json());

      setTime(data.time);
    }

    void loadData();
  }, []);

  return (
    <div className="grid">
      <span>Client</span>
      <span>{time}</span>
    </div>
  );
}
