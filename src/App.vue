<script setup lang="ts">
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { RouterView } from "vue-router";
import { useSystemStore } from "./stores/system";
const systemStore = useSystemStore();
systemStore.loadColorScheme();
dayjs.locale("pt-br");
</script>

<template>
  <RouterView />
</template>
