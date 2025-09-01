<script setup lang="ts">
import dayjs from "dayjs";
const currentYear = dayjs().year();
</script>
<template>
  <footer class="bg-white dark:bg-header shadow-md">
    <div
      class="container mx-auto py-4 px-6 text-center text-sm text-header dark:text-white"
    >
      &copy; {{ currentYear }} Victor de Oliveira Martins Azevedo
    </div>
  </footer>
</template>
