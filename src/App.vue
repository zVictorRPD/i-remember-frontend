<script setup lang="ts">
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { RouterView } from "vue-router";
import { useSystemStore } from "./stores/system";
import { useUserStore } from "./stores/user";

const systemStore = useSystemStore();
const userStore = useUserStore();

systemStore.loadColorScheme();
userStore.loadUser();


dayjs.locale("pt-br");
</script>

<template>
  <RouterView />
</template>
