import { Suspense } from "react";
import { RSC } from "./server";
import { Client } from "./client";
import { Buttons } from "./buttons";

export default function Home() {
  return (
    <div className="grid gap-4">
      <Suspense>
        <RSC />
      </Suspense>

      <Client />

      <Buttons />
    </div>
  );
}
