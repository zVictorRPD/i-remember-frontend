<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './AppHeader.vue';

</script>

<template>
  <AppHeader />
  <main class="flex-grow">
    <div class="container mx-auto py-6 px-6">
      <RouterView />
    </div>
  </main>
</template>