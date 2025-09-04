<script setup lang="ts">
import { useAttrs } from "vue";
defineProps({
  hasError: {
    type: Boolean,
    default: false,
  },
});

const attrs = useAttrs();
</script>
<template>
  <input
    v-bind="attrs"
    class="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-primary-300 dark:border-primary-200 dark:placeholder:text-primary-100"
    :class="{
      'border-red-500 focus:ring-red-500': hasError,
    }"
  />
</template>
<style scoped>
html.dark input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.8);
}
</style>
