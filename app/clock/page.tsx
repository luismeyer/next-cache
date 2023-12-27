import { Suspense } from "react";
import { RSC } from "./server";
import { Client } from "./client";
import { Buttons } from "./buttons";

export default function Home() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-4">
        <h2 className="text-lg">Static</h2>

        <Suspense>
          <RSC />
        </Suspense>

        <Client />

        <Buttons />
      </div>
    </div>
  );
}
