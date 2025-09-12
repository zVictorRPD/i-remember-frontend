<script setup lang="ts">
import { Loader2Icon } from "lucide-vue-next";
import { twMerge } from "tailwind-merge";
import { computed, useAttrs, type Component } from "vue";

interface IButtonProps {
  variant?: "primary" | "secondary" | "danger" | "success";
  isLoading?: boolean;
  size?: "icon" | "small" | "medium" | "large";
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
  const baseClasses = "rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-70";
  
  const variantClasses = {
    primary: "bg-primary-500 hover:bg-primary-300 dark:bg-primary-600 dark:hover:bg-black text-white focus:ring-primary-400",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 focus:ring-red-300",
    success: "bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 focus:ring-green-300",
  };

  const sizeClasses = {
    icon: "p-1.5 text-sm",
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-2.5 text-lg",
  };

  return twMerge(
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    attrs.class as string
  );
});

const buttonIconClasses = computed(() => {
  const baseClasses = "inline-block";
  
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    icon: "w-5 h-5",
    large: "w-6 h-6",
  };

  return twMerge(baseClasses, sizeClasses[props.size]);
});

const loadingIconSize = computed(() => {
  return props.size === "small" ? 16 : props.size === "medium" ? 20 : 24;
});
</script>

<template>
  <button v-bind="attrs" :class="buttonClasses" :disabled="props.isLoading">
    <Loader2Icon
      v-if="props.isLoading"
      class="animate-spin"
      :size="loadingIconSize"
    />
    <component
      v-else-if="props.icon"
      :is="props.icon"
      :class="buttonIconClasses"
    />
    <slot />
  </button>
</template>
