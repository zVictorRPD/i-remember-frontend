<script setup lang="ts">
import { XIcon } from "lucide-vue-next";
import {
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "reka-ui";
import { provide, ref } from "vue";

interface IToastProps {
  title: string;
  description: string;
  type: "success" | "error";
}

const openRef = ref(false);
const timerRef = ref(0);
const titleRef = ref("");
const descriptionRef = ref("");
const typeRef = ref<"success" | "error">("error");

function showToast({ title, description, type }: IToastProps) {
  openRef.value = true;
  titleRef.value = title;
  descriptionRef.value = description;
  typeRef.value = type;
  clearTimeout(timerRef.value);
  timerRef.value = window.setTimeout(() => {
    openRef.value = false;
  }, 3000);
}

function closeToast() {
  openRef.value = false;
  clearTimeout(timerRef.value);
}

provide('showToast', showToast);

defineExpose({ showToast });
</script>

<template>
  <ToastProvider>
    <ToastRoot
      :open="openRef"
      @open-change="(v: boolean) => (openRef = v)"
      :class="{
        'bg-green-600': typeRef === 'success',
        'bg-red-600': typeRef === 'error',
      }"
      class="p-3 pointer-events-auto w-full max-w-sm rounded-md shadow-lg will-change-[opacity,transform] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:fade-in-80 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipe-out"
    >
      <ToastTitle class="text-white font-medium">
        {{ titleRef }}
      </ToastTitle>
      <ToastDescription class="text-white text-sm">
        {{ descriptionRef }}
      </ToastDescription>
      <ToastClose 
        class="text-white hover:text-white/80 absolute top-2 right-2 cursor-pointer p-1 rounded hover:bg-white/10 transition-colors"
        @click="closeToast"
      >
        <XIcon :size="20" />
      </ToastClose>
    </ToastRoot>
    <ToastViewport
      class="fixed top-0 z-[100] flex h-auto max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
    />
  </ToastProvider>
</template>
