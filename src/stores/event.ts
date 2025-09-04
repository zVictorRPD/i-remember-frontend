import type { IEventStore } from "@/interfaces/event";
import { defineStore } from "pinia";

export const useEventStore = defineStore("event", {
  state: (): IEventStore => ({
    events: [],
    addDialogIsOpen: false,
  }),
  actions: {
    setAddDialogIsOpen(isOpen: boolean) {
      this.addDialogIsOpen = isOpen;
    },
  },
});
