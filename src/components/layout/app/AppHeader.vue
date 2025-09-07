<script setup lang="ts">
import { useSystemStore } from "@/stores/system";
import { useUserStore } from "@/stores/user";
import { LogOutIcon, MoonIcon, SunIcon } from "lucide-vue-next";

const systemStore = useSystemStore();
const userStore = useUserStore();
</script>

<template>
  <header class="bg-white dark:bg-header border-b border-b-gray-200 dark:border-b-gray-700">
    <div
      class="container max-w-5xl h-20 mx-auto py-4 px-6 flex justify-between items-center "
    >
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
      <div class="flex gap-3">
        <button
        @click="systemStore.toggleColorScheme()"
        class="p-2 rounded hover:bg-gray-200 dark:hover:bg-sky-950 transition cursor-pointer border border-gray-200 dark:border-sky-950"
      >
        <SunIcon
          v-if="systemStore.colorScheme === 'light'"
          class="w-6 h-6 text-header"
        />
        <MoonIcon v-else class="w-6 h-6 text-gray-200" />
      </button>
      <button
        @click="userStore.logoutUser()"
        class="p-2 rounded hover:bg-gray-200 dark:hover:bg-sky-950 transition cursor-pointer border border-gray-200 dark:border-sky-950"
      >
        <LogOutIcon class="w-6 h-6 text-header" />
      </button>
      </div>
    </div>
  </header>
</template>
