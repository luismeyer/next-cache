type TimeResponse = {
  datetime: string;
};

export async function fetchTime(zone = "Europe/London") {
  const response: TimeResponse = await fetch(
    `http://worldtimeapi.org/api/timezone/${zone}`
  ).then((res) => res.json());

  return response.datetime;
}
