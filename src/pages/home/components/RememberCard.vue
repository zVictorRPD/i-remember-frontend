<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-vue-next";
</script>

<template>
  <div class="p-2.5 bg-white dark:bg-header rounded-md flex flex-col gap-4">
    <div class="flex items-center gap-3">
      <img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="Avatar"
        class="w-12 h-12 rounded-full"
      />
      <div class="flex flex-col items-start justify-center gap-1">
        <p class="text-xl">Nome do evento - 99 anos</p>
        <div class="flex flex-col md:flex-row justify-start items-start md:items-center gap-2">
          <span
            class="px-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-xs uppercase"
          >
            amigo
          </span>
          <span
            class="px-1 bg-green-100 text-green-800 text-xs font-semibold rounded-xs uppercase"
          >
            28/12/2000 - faltam 10 dias
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-2 mb-1">
        <MapPinIcon :size="16" class="white" />
        Local do evento
      </div>
      <div class="flex items-center gap-2 mb-1">
        <ClockIcon :size="16" class="white" />
        22:00 - 23:00
      </div>
      <p class="line-clamp-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, vel.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
        voluptates nihil ipsam!
      </p>
    </div>
    <div class="flex justify-between items-center flex-col md:flex-row gap-4">
      <div class="flex gap-2.5">
        <a href="#">
          <FacebookIcon :size="22" class="white" />
        </a>
        <a href="#">
          <InstagramIcon :size="22" class="white" />
        </a>
        <a href="#">
          <MessageCircleIcon :size="22" class="white" />
        </a>
        <a href="#">
          <MailIcon :size="22" class="white" />
        </a>
      </div>
      <div class="flex gap-2">
        <Button variant="primary" size="small" :icon="PencilIcon"> Editar </Button>
        <Button variant="danger" size="small" :icon="Trash2Icon"> Excluir </Button>
      </div>
    </div>
  </div>
</template>
