<script setup lang="ts">
import { useSystemStore } from '@/stores/system';

const systemStore = useSystemStore();
</script>

<template>
  <header class="bg-blue-200 dark:bg-blue-950">
    <div class="container mx-auto py-4 px-6 flex justify-between items-center">
      <h1>iRemember</h1>
      <button @click="systemStore.toggleColorScheme()">trocar cor</button>
    </div>
  </header>
</template>
