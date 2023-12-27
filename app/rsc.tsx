import { fetchTime } from "./api/fetch-time";

export async function RSC() {
  const time = await fetchTime();

  return (
    <div>
      <span>RSC</span>
      <span>{time}</span>
    </div>
  );
}
