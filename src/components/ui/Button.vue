<script setup lang="ts">
import { Loader2Icon } from "lucide-vue-next";
import { computed, useAttrs, type Component } from "vue";

interface IButtonProps {
  variant?: "primary" | "secondary" | "danger" | "success";
  isLoading?: boolean;
  size?: "small" | "medium" | "large";
  icon?: Component | null;
}

const props = withDefaults(defineProps<IButtonProps>(), {
  variant: "primary",
  isLoading: false,
  size: "medium",
  icon: null,
});

const attrs = useAttrs();

const buttonClasses = computed(() => {
  return [
    "rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-70",
    {
      // Variantes
      "bg-primary-500 hover:bg-primary-300 dark:bg-primary-600 dark:hover:bg-black text-white focus:ring-primary-400":
        props.variant === "primary",
      "bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-gray-300":
        props.variant === "secondary",
      "bg-red-500 text-white hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 focus:ring-red-300":
        props.variant === "danger",
      "bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 focus:ring-green-300":
        props.variant === "success",

      // Tamanhos
      "px-3 py-1.5 text-sm": props.size === "small",
      "px-4 py-2 text-base": props.size === "medium",
      "px-5 py-2.5 text-lg": props.size === "large",
    },
  ];
});

const buttonIconClasses = computed(() => {
  return [
    "inline-block",
    {
      "w-4 h-4": props.size === "small",
      "w-5 h-5": props.size === "medium",
      "w-6 h-6": props.size === "large",
    },
  ];
});
</script>

<template>
  <button v-bind="attrs" :class="buttonClasses" :disabled="props.isLoading">
    <Loader2Icon v-if="props.isLoading" class="animate-spin" />
    <component
      v-else-if="props.icon"
      :is="props.icon"
      :class="buttonIconClasses"
    />
    <slot />
  </button>
</template>
