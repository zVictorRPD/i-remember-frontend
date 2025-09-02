<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import { PlusIcon } from "lucide-vue-next";
import RememberCard from "./components/RememberCard.vue";
</script>

<template>
  <div class="flex justify-end mb-3">
    <Button :icon="PlusIcon"> Adicionar Data </Button>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <RememberCard v-for="i in [1,2,3,4,5,6,7]" :key="i" />
  </div>
</template>
