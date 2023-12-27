import { fetchTime } from "../api/fetch-time";
import { Time } from "./time";

export async function RSC() {
  const time = await fetchTime();

  return (
    <div className="grid">
      <span>RSC:</span>
      <Time>{time}</Time>
    </div>
  );
}
