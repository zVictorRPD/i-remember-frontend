<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import { useEventStore } from "@/stores/event";
import { getEventsService } from "@/utils/services/event";
import { useQuery } from "@tanstack/vue-query";
import dayjs from "dayjs";
import { PlusIcon } from "lucide-vue-next";
import { watch } from "vue";
import AddEventDialog from "./components/AddEventDialog.vue";
import EditEventDialog from "./components/EditEventDialog.vue";
import MonthFilter from "./components/MonthFilter.vue";
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
      const currentMonth = {
        value: dayjs().month(),
        label: dayjs().format("MMMM"),
      };
      eventStore.setFilteredEvents(
        newData.data.filter(
          (event) => dayjs(event.date).month() === currentMonth.value
        )
      );
      eventStore.setCurrentMonth(currentMonth);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="flex flex-col-reverse items-center gap-3 md:flex-row justify-between mb-3"
  >
    <MonthFilter />
    <Button
      :icon="PlusIcon"
      class="hidden md:inline-flex"
      size="small"
      @click="eventStore.setAddDialogIsOpen(true)"
    >
      Adicionar Evento
    </Button>
  </div>
  <div v-if="isLoading" class="min-h-[40vh] flex items-center justify-center">
    <p class="font-bold text-xl text-center">
      Carregando eventos...
    </p>
  </div>
  <div v-else-if="error" class="min-h-[40vh] flex items-center justify-center">
    <p class="font-bold text-xl text-center">
      Ocorreu um erro ao carregar os eventos. Por favor, tente novamente mais tarde.
    </p>
  </div>
  <RememberCards v-else-if="data" />
  <AddEventDialog />
  <EditEventDialog />
</template>
