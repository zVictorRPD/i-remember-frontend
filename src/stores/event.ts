import type { IEvent, IEventStore } from "@/interfaces/event";
import { eventInitialValues } from "@/utils/forms/event";
import { defineStore } from "pinia";

export const useEventStore = defineStore("event", {
  state: (): IEventStore => ({
    events: [],
    addDialogIsOpen: false,
    newEvent: eventInitialValues,
    editDialogIsOpen: false,
    eventToEdit: {
      ...eventInitialValues,
      id: 0,
      createdAt: "",
    },
  }),
  actions: {
    setAddDialogIsOpen(isOpen: boolean) {
      this.addDialogIsOpen = isOpen;
    },
    setEditDialogIsOpen(isOpen: boolean) {
      this.editDialogIsOpen = isOpen;
    },
    setEvents(events: IEvent[]) {
      this.events = events;
    },
    setEventToEdit(event: IEvent) {
      this.eventToEdit = event;
    },
  },
});
