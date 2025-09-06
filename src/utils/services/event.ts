import type { IEvent } from "@/interfaces/event";
import type { TEventFormValues } from "../forms/event";

export async function addNewEventService(
  event: TEventFormValues
): Promise<IEvent> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...event, id: Math.random().toString(36).substr(2, 9) });
    }, 1500);
  });
}

export async function updateEventService(event: IEvent): Promise<IEvent> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(event);
    }, 1500);
  });
}
