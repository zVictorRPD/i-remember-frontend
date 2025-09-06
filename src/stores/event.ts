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
      id: "",
    },
  }),
  actions: {
    setAddDialogIsOpen(isOpen: boolean) {
      this.addDialogIsOpen = isOpen;
    },
    setEditDialogIsOpen(isOpen: boolean) {
      this.editDialogIsOpen = isOpen;
    },
    addNewEvent(newEvent: IEvent) {
      this.events.push(newEvent);
    },
    editEvent(updatedEvent: IEvent) {
      const index = this.events.findIndex(
        (event) => event.id === updatedEvent.id
      );
      if (index !== -1) {
        this.events[index] = updatedEvent;
      }
    },
    setEventToEdit(event: IEvent) {
      this.eventToEdit = event;
    },
  },
});
