<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import type { IEvent } from "@/interfaces/event";
import { useEventStore } from "@/stores/event";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PencilIcon,
} from "lucide-vue-next";
import DeleteEventPopover from "./DeleteEventPopover.vue";

const eventStore = useEventStore();
function handleEditEvent(event: IEvent) {
  eventStore.setEventToEdit(event);
  eventStore.setEditDialogIsOpen(true);
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div
      class="p-2.5 bg-white dark:bg-header rounded-md flex flex-col gap-4"
      v-for="event in eventStore.events"
      :key="event.id"
    >
      <div class="flex items-center gap-3">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Avatar"
          class="w-12 h-12 rounded-full"
        />
        <div class="flex flex-col items-start justify-center gap-1">
          <p class="text-xl">{{ event.name }} - 99 anos</p>
          <div
            class="flex flex-col md:flex-row justify-start items-start md:items-center gap-2"
          >
            <span
              class="px-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-xs uppercase"
            >
              {{ event.category }}
            </span>
            <span
              class="px-1 bg-green-100 text-green-800 text-xs font-semibold rounded-xs uppercase"
            >
              {{ event.date }} - faltam 10 dias
            </span>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center gap-2 mb-1" v-if="event.location">
          <MapPinIcon :size="16" class="white" />
          {{ event.location }}
        </div>
        <div class="flex items-center gap-2 mb-1" v-if="event.time">
          <ClockIcon :size="16" class="white" />
          {{ event.time }}
        </div>
        <p class="line-clamp-2" v-if="event.description">
          {{ event.description }}
        </p>
      </div>
      <div class="flex justify-between items-center flex-col md:flex-row gap-4">
        <div class="flex gap-2.5">
          <a :href="event.facebook" v-if="event.facebook">
            <FacebookIcon :size="22" class="white" />
          </a>
          <a :href="event.instagram" v-if="event.instagram">
            <InstagramIcon :size="22" class="white" />
          </a>
          <a :href="event.whatsApp" v-if="event.whatsApp">
            <MessageCircleIcon :size="22" class="white" />
          </a>
          <a :href="event.email" v-if="event.email">
            <MailIcon :size="22" class="white" />
          </a>
        </div>
        <div class="flex gap-2">
          <Button
            variant="primary"
            size="small"
            :icon="PencilIcon"
            @click="handleEditEvent(event)"
          >
            Editar
          </Button>
          <DeleteEventPopover :eventId="event.id" />
        </div>
      </div>
    </div>
  </div>
</template>
