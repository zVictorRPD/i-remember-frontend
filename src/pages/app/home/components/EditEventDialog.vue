<script setup lang="ts">
import Dialog from "@/components/ui/Dialog.vue";
import type { IEvent } from "@/interfaces/event";
import { useEventStore } from "@/stores/event";
import { eventValidationSchema } from "@/utils/forms/event";
import { updateEventService } from "@/utils/services/event";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { Form } from "vee-validate";
import EventForm from "./EventForm.vue";

const eventStore = useEventStore();
const queryClient = useQueryClient();

const mutate = useMutation({
  mutationFn: updateEventService,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["events"] });
    eventStore.setEditDialogIsOpen(false);
  },
});

async function handleFormSubmit(v: any) {
  const values: IEvent = v;
  await mutate.mutateAsync({
    ...values,
    id: eventStore.eventToEdit.id,
  });
}
</script>

<template>
  <Dialog
    :open="eventStore.editDialogIsOpen"
    title="Editar Evento"
    @update-open="eventStore.setEditDialogIsOpen($event)"
    size="md"
    :form-id="'edit-event-form'"
    :has-confirm-button="true"
    confirm-button-text="Editar"
    :is-loading="mutate.isPending.value"
  >
    <Form
      id="edit-event-form"
      :validation-schema="eventValidationSchema"
      class="space-y-4"
      :initial-values="eventStore.eventToEdit"
      @submit="handleFormSubmit"
    >
      <EventForm />
    </Form>
  </Dialog>
</template>
