"use client";

import { revalidateApiPath } from "../api/actions/revalidate-api-path";
import { revalidatePagePath } from "../api/actions/revalidate-page-path";

export function Buttons() {
  return (
    <div className="grid gap-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => void revalidateApiPath()}
      >
        Revalidate API path
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => void revalidatePagePath()}
      >
        Revalidate Page path
      </button>
    </div>
  );
}
