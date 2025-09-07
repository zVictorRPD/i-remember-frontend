<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import { useEventStore } from "@/stores/event";
import { getEventsService } from "@/utils/services/event";
import { useQuery } from "@tanstack/vue-query";
import { PlusIcon } from "lucide-vue-next";
import { watch } from "vue";
import AddEventDialog from "./components/AddEventDialog.vue";
import EditEventDialog from "./components/EditEventDialog.vue";
import RememberCards from "./components/RememberCards.vue";

const eventStore = useEventStore();

const { data, isLoading, error } = useQuery({
  queryKey: ["events"],
  queryFn: getEventsService,
});

watch(
  () => data.value,
  (newData) => {
    if (newData?.data) {
      eventStore.setEvents(newData.data);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex justify-end mb-3">
    <Button :icon="PlusIcon" @click="eventStore.setAddDialogIsOpen(true)">
      Adicionar Evento
    </Button>
  </div>
  <div v-if="isLoading">carregando...</div>
  <div v-else-if="error" class="text-red-500">error: {{ error?.message }}</div>
  <RememberCards v-else-if="data" />
  <AddEventDialog />
  <EditEventDialog />
</template>
