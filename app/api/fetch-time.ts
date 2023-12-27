type TimeResponse = {
  datetime: string;
};

export async function fetchTime() {
  const response: TimeResponse = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/London"
  ).then((res) => res.json());

  return response.datetime;
}
