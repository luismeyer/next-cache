import { fetchTime } from "../api/fetch-time";

export async function RSC({ timezone }: { timezone?: string }) {
  const time = await fetchTime(timezone);

  return (
    <div className="grid">
      <span>RSC:</span>
      <span>{time}</span>
    </div>
  );
}
