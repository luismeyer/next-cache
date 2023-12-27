"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function TimezonePicker() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleButtonClick = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("timezone", inputValue);

    router.push(url.href);
  };

  return (
    <div className="grid gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-full"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Search
      </button>
    </div>
  );
}
