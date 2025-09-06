<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import { useEventStore } from "@/stores/event";
import { PlusIcon } from "lucide-vue-next";
import AddEventDialog from "./components/AddEventDialog.vue";
import EditEventDialog from "./components/EditEventDialog.vue";
import RememberCards from "./components/RememberCards.vue";

const eventStore = useEventStore();
</script>

<template>
  <div class="flex justify-end mb-3">
    <Button :icon="PlusIcon" @click="eventStore.setAddDialogIsOpen(true)">
      Adicionar Evento
    </Button>
  </div>
  <RememberCards />
  <AddEventDialog />
  <EditEventDialog />
</template>
