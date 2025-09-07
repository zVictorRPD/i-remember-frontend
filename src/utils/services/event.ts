import type { IEvent } from "@/interfaces/event";
import type { TEventFormValues } from "../forms/event";
import { api, type IApiResponse } from "./api";

export async function getEventsService() {
  try {
    const response = await api<IApiResponse<IEvent[]>>(`/events`, {
      method: "GET",
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getEventByIdService(id: string) {
  try {
    const response = await api<IApiResponse<IEvent>>(`/events/${id}`, {
      method: "GET",
    });
    return response;
  }
  catch (error) {
    throw error;
  }
}

export async function addNewEventService(event: TEventFormValues) {
  try {
    const response = await api<IApiResponse<IEvent>>(`/events`, {
      method: "POST",
      body: JSON.stringify(event),
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateEventService(event: IEvent) {
  try {
    const response = await api<IApiResponse<IEvent>>(`/events/${event.id}`, {
      method: "PUT",
      body: JSON.stringify(event),
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteEventService(id: number) {
  try {
    const response = await api<IApiResponse<null>>(`/events/${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    throw error;
  }
}
