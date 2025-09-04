<script setup lang="ts">
import Dialog from "@/components/ui/Dialog.vue";
import { useEventStore } from "@/stores/event";
import EventForm from "./EventForm.vue";
const eventStore = useEventStore();
</script>

<template>
  <Dialog
    :open="eventStore.addDialogIsOpen"
    title="Adicionar Evento"
    :has-confirm-button="true"
    @update-open="eventStore.setAddDialogIsOpen($event)"
    size="md"
  >
    <EventForm />
  </Dialog>
</template>
