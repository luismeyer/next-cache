import { Suspense } from "react";
import { RSC } from "./rsc";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense>
        <RSC />
      </Suspense>
    </main>
  );
}
