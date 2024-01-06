import Link from "next/link";

export default function Home() {
  return (
    <main className="grid gap-2">
      <Link href="/clock">CLOCK</Link>

      <Link href="/counter">COUNTER</Link>
    </main>
  );
}
