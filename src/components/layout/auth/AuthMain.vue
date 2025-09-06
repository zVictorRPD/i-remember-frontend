<script setup lang="ts">
import { useSystemStore } from "@/stores/system";
import { MoonIcon, SunIcon } from "lucide-vue-next";
import { RouterView } from "vue-router";

const systemStore = useSystemStore();
</script>
<template>
  <main
    class="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4 relative"
  >
    <div
      class="w-full max-w-sm bg-white dark:bg-header border-b border-b-gray-200 dark:border-b-gray-700 rounded-lg shadow-lg p-6"
    >
      <div class="flex justify-center mb-6">
        <img
          :src="systemStore.logoPath"
          alt="iRemember logo"
          class="w-52 hidden md:block"
        />
        <img
          :src="systemStore.mobileLogoPath"
          alt="iRemember logo"
          class="w-10 block md:hidden"
        />
      </div>
      <RouterView />
    </div>
    <button
      @click="systemStore.toggleColorScheme()"
      class="p-2 rounded hover:bg-gray-200 dark:hover:bg-sky-950 transition cursor-pointer border border-gray-200 dark:border-sky-950 absolute top-4 right-4 md:top-8 md:right-8"
    >
      <SunIcon
        v-if="systemStore.colorScheme === 'light'"
        class="w-6 h-6 text-header"
      />
      <MoonIcon v-else class="w-6 h-6 text-gray-200" />
    </button>
  </main>
</template>
