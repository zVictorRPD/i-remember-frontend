<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import { useEventStore } from "@/stores/event";
import dayjs from "dayjs";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";

const eventStore = useEventStore();

const currentMonth = {
  value: dayjs().month(),
  label: dayjs().format("MMMM"),
};

function handleChangeMonth(type: string) {
  let newMonth = eventStore.currentMonth.value;
  let newMonthLabel = eventStore.currentMonth.label;
  switch (type) {
    case "prev":
      newMonth = (eventStore.currentMonth.value - 1 + 12) % 12;
      newMonthLabel = dayjs().month(newMonth).format("MMMM");
      break;
    case "next":
      newMonth = (eventStore.currentMonth.value + 1) % 12;
      newMonthLabel = dayjs().month(newMonth).format("MMMM");
      break;
    case "current":
      newMonth = currentMonth.value;
      newMonthLabel = currentMonth.label;
      break;
  }
  eventStore.setCurrentMonth({ value: newMonth, label: newMonthLabel });
  eventStore.setFilteredEvents(
    eventStore.events.filter((event) => dayjs(event.date).month() === newMonth)
  );
}
</script>

<template>
  <div class="flex items-center gap-4 md:gap-2">
    <Button
      :icon="ChevronLeftIcon"
      size="icon"
      @click="handleChangeMonth('prev')"
    />
    <h3 class="font-medium text-3xl md:hidden block capitalize">
      {{ eventStore.currentMonth.label }}
    </h3>
    <Button
      :icon="ChevronRightIcon"
      size="icon"
      @click="handleChangeMonth('next')"
    />
    <Button
      size="small"
      class="hidden md:inline-flex"
      @click="handleChangeMonth('current')"
      :disabled="eventStore.currentMonth.value === currentMonth.value"
    >
      Mês Atual
    </Button>
  </div>
  <h3 class="font-medium text-4xl hidden md:block capitalize">
    {{ eventStore.currentMonth.label }}
  </h3>
</template>
