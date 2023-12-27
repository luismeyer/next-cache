import { fetchTime } from "../../fetch-time";

export async function generateStaticParams() {
  const posts: string[] = await fetch(
    "https://worldtimeapi.org/api/timezone"
  ).then((res) => res.json());

  return posts.map((zone) => ({ zone: zone.split("/") }));
}

export async function GET(
  _reuqest: Request,
  { params }: { params: { zone?: string[] } }
) {
  const time = await fetchTime(params.zone?.join("/"));

  return Response.json({ time });
}
