<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import { PlusIcon } from "lucide-vue-next";
</script>

<template>
  <div class="flex justify-end">
    <Button :icon="PlusIcon"> Adicionar Data </Button>
  </div>
</template>
