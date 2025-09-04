<script setup lang="ts">
import { XIcon } from "lucide-vue-next";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from "reka-ui";
import Button from "./Button.vue";
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  confirmText: {
    type: String,
    default: "Salvar",
  },
  hasConfirmButton: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "sm",
  },
});
const emit = defineEmits<{
  updateOpen: [value: boolean];
  confirm: [value: boolean];
}>();
</script>

<template>
  <DialogRoot :open="props.open" @update:open="emit('updateOpen', $event)">
    <DialogPortal>
      <DialogOverlay
        class="bg-black/80 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
      />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-primary-400 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
        :class="{
          'w-[90vw] max-w-[450px]': props.size === 'sm',
          'w-[90vw] max-w-[700px]': props.size === 'md',
          'w-[90vw] max-w-[900px]': props.size === 'lg',
        }"
      >
        <DialogTitle class="text-lg mb-3 font-semibold">
          {{ props.title }}
        </DialogTitle>
        <slot />
        <DialogDescription class="sr-only">
          {{ props.title }} diálogo
        </DialogDescription>
        <div class="mt-[25px] flex justify-end gap-3">
          <DialogClose as-child>
            <Button variant="secondary"> Fechar </Button>
          </DialogClose>
          <Button @click="emit('confirm', true)" v-if="props.hasConfirmButton">
            {{ props.confirmText }}
          </Button>
        </div>
        <DialogClose
          class="dark:text-white cursor-pointer absolute top-[16px] right-[16px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <XIcon />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
