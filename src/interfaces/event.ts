import type { TEventFormValues } from "@/utils/forms/event";

export interface IEvent {
  id: string;
  name: string;
  category: string;
  date: string;
  description?: string;
  time?: string;
  location?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  email?: string;
  whatsApp?: string;
}

export interface IEventStore {
  events: IEvent[];
  addDialogIsOpen: boolean;
  editDialogIsOpen: boolean;
  newEvent: TEventFormValues;
  eventToEdit: IEvent;
}
