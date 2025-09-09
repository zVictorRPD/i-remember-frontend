<script setup lang="ts">
import { useAttrs } from "vue";

interface ISelectOption {
  value: string | number;
  label: string;
}

defineProps({
  error: {
    type: String,
    default: "",
  },
  options: {
    type: Array as () => ISelectOption[],
    required: true,
  },
  placeholder: {
    type: String,
    default: "Selecione uma opção",
  },
});

const attrs = useAttrs();
</script>

<template>
  <div class="relative">
    <select
      v-bind="attrs"
      class="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-primary-300 dark:border-primary-200 dark:text-white appearance-none cursor-pointer pr-10"
      :class="{
        'border-red-500 focus:ring-red-500': error,
      }"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value"
        class="dark:bg-primary-300 dark:text-white"
      >
        {{ option.label }}
      </option>
    </select>
    <!-- Ícone da seta SVG, posicionado absolutamente -->
    <span
      class="pointer-events-none absolute inset-y-0 right-3 flex items-center"
      style="top: 50%; transform: translateY(-50%);"
      aria-hidden="true"
    >
      <svg
        class="w-5 h-5 text-gray-400 dark:text-primary-100"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 20 20"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 8l4 4 4-4" />
      </svg>
    </span>
    <span v-if="error" class="text-sm text-red-500">{{ error }}</span>
  </div>
</template>

<style scoped>
/* Remover a imagem de fundo do select para garantir que a seta SVG apareça */
select {
  background-image: none !important;
}

/* Estilização para estado de erro */
select.border-red-500 {
  /* Nenhuma imagem de fundo, a seta SVG será usada */
}
</style>
