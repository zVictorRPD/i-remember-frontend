<script setup lang="ts">
import dayjs from "dayjs";
const currentYear = dayjs().year();
</script>
<template>
  <footer class="bg-white dark:bg-header border-t border-t-gray-200 dark:border-t-gray-700">
    <div
      class="container max-w-5xl mx-auto py-4 px-6 text-center text-sm text-header dark:text-white"
    >
      &copy; {{ currentYear }} Victor de Oliveira Martins Azevedo
    </div>
  </footer>
</template>
