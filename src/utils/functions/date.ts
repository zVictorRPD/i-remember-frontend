import dayjs from "dayjs";

export function getEventDiffInYears(eventDate: string): number {
  const eventDayjs = dayjs(eventDate);
  const now = dayjs();
  return now.diff(eventDayjs, "year");
}

export function getEventDiffInDays(eventDate: string): number {
  const now = dayjs();
  const event = dayjs(eventDate);

  let nextEvent = event.year(now.year());

  if (nextEvent.isBefore(now, "day")) {
    nextEvent = nextEvent.add(1, "year");
  }

  return nextEvent.diff(now, "day");
}

export function formatEventDate(date: string, format: string): string {
  return dayjs(date).format(format);
}