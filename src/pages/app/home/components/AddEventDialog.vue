<script setup lang="ts">
import Dialog from "@/components/ui/Dialog.vue";
import { useEventStore } from "@/stores/event";
import { eventValidationSchema, type TEventFormValues } from "@/utils/forms/event";
import { addNewEventService } from "@/utils/services/event";
import { useMutation } from "@tanstack/vue-query";
import { Form } from "vee-validate";
import EventForm from "./EventForm.vue";

const eventStore = useEventStore();

const mutate = useMutation({
  mutationFn: addNewEventService,
  onSuccess: (data) => {
    eventStore.addNewEvent(data);
    eventStore.setAddDialogIsOpen(false);
  },
});

async function handleFormSubmit(v: any) {
  const values: TEventFormValues = v;
  await mutate.mutateAsync(values);
}
</script>

<template>
  <Dialog
    :open="eventStore.addDialogIsOpen"
    title="Adicionar Evento"
    :has-confirm-button="true"
    :form-id="'add-event-form'"
    @update-open="eventStore.setAddDialogIsOpen($event)"
    size="md"
    :is-loading="mutate.isPending.value"
  >
    <Form
      id="add-event-form"
      :validation-schema="eventValidationSchema"
      class="space-y-4"
      :initial-values="eventStore.newEvent"
      @submit="handleFormSubmit"
    >
      <EventForm />
    </Form>
  </Dialog>
</template>
