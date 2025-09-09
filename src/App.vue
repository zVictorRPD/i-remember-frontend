<script setup lang="ts">
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { RouterView } from "vue-router";
import Toast from "./components/ui/Toast.vue";
import { useToast } from "./composables/useToast";
import { useSystemStore } from "./stores/system";
import { useUserStore } from "./stores/user";

const systemStore = useSystemStore();
const userStore = useUserStore();
const { toastRef } = useToast();

systemStore.loadColorScheme();
userStore.loadUser();


dayjs.locale("pt-br");
</script>

<template>
  <RouterView />
  <Toast ref="toastRef" />
</template>
