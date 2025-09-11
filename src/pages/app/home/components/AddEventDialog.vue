<script setup lang="ts">
import Dialog from "@/components/ui/Dialog.vue";
import { useToast } from "@/composables/useToast";
import { useEventStore } from "@/stores/event";
import {
  eventValidationSchema,
  type TEventFormValues,
} from "@/utils/forms/event";
import { removeMask } from "@/utils/functions/masks";
import { addNewEventService } from "@/utils/services/event";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { Form } from "vee-validate";
import EventForm from "./EventForm.vue";

const eventStore = useEventStore();
const queryClient = useQueryClient();
const { showToast } = useToast();

const mutate = useMutation({
  mutationFn: addNewEventService,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["events"] });
    eventStore.setAddDialogIsOpen(false);
    showToast({
      title: "Sucesso",
      description: "Evento adicionado com sucesso!",
      type: "success",
    });
  },
  onError: (error: any) => {
    showToast({
      title: "Erro",
      description: error?.message || "Ocorreu um erro ao adicionar o evento.",
      type: "error",
    });
  },
});

async function handleFormSubmit(v: any) {
  const values: TEventFormValues = v;
  await mutate.mutateAsync({
    ...values,
    whatsApp: removeMask(values.whatsApp || ""),
  });
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
