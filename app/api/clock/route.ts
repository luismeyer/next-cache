import { fetchTime } from "../fetch-time";

export async function GET() {
  const time = await fetchTime();

  return Response.json({ time });
}
