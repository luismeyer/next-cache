import { Suspense } from "react";
import { RSC } from "./server";
import { Client } from "./client";
import { Buttons } from "./buttons";
import { TimezonePicker } from "./timezone-picker";

export default function Home({
  searchParams: { timezone },
}: {
  searchParams: Record<string, string>;
}) {
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

      <div className="grid gap-4">
        <h2 className="text-lg">Dynamic</h2>

        <Suspense>
          <RSC timezone={timezone} />
        </Suspense>

        <Client timezone={timezone} />

        <Buttons timezone={timezone} />
      </div>

      <TimezonePicker />
    </div>
  );
}
