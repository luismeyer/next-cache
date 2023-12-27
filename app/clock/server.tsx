import { fetchTime } from "../api/fetch-time";
import { Time } from "./time";

export async function RSC({ timezone }: { timezone?: string }) {
  const time = await fetchTime(timezone);

  return (
    <div className="grid">
      <span>RSC:</span>
      <Time>{time}</Time>
    </div>
  );
}
