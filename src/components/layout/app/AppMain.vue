<script setup lang="ts">
import { RouterView } from "vue-router";
import AppFooter from "./AppFooter.vue";
import AppHeader from "./AppHeader.vue";
</script>

<template>
  <AppHeader />
  <main class="min-h-[calc(100vh-132px)]">
    <div class="container mx-auto py-6 px-6">
      <RouterView />
    </div>
  </main>
  <AppFooter />
</template>
