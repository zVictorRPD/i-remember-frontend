import type { IEvent, IEventStore } from "@/interfaces/event";
import { eventInitialValues } from "@/utils/forms/event";
import dayjs from "dayjs";
import { defineStore } from "pinia";

export const useEventStore = defineStore("event", {
  state: (): IEventStore => ({
    events: [],
    filteredEvents: [],
    currentMonth: {
      label: dayjs().format("MMMM"),
      value: dayjs().month(),
    },
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
    setFilteredEvents(events: IEvent[]) {
      this.filteredEvents = events;
    },
    setCurrentMonth(month: { label: string; value: number }) {
      this.currentMonth = month;
    },
    setEventToEdit(event: IEvent) {
      this.eventToEdit = event;
    },
  },
});
