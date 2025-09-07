<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import { deleteEventService } from "@/utils/services/event";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { Trash2Icon } from "lucide-vue-next";
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from "reka-ui";

const props = defineProps({
  eventId: {
    type: Number,
    required: true,
  },
});

const queryClient = useQueryClient();

const mutate = useMutation({
  mutationFn: deleteEventService,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["events"] });
  },
});

async function handleDeleteEvent() {
  await mutate.mutateAsync(props.eventId);
}
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger as-child>
      <Button variant="danger" size="small" :icon="Trash2Icon">
        Excluir
      </Button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        side="bottom"
        :side-offset="5"
        class="rounded-lg p-5 w-[320px] bg-white shadow-sm border will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
      >
        <div class="mb-4">
          <h3 class="text-md font-medium text-gray-900">
            Tem certeza que deseja excluir este evento?
          </h3>
          <p class="text-sm text-gray-500">Esta ação não pode ser desfeita.</p>
        </div>
        <div class="flex justify-end">
          <PopoverClose as-child>
            <Button variant="secondary" size="small"> Cancelar </Button>
          </PopoverClose>
          <Button
            variant="danger"
            size="small"
            class="ml-2"
            @click="handleDeleteEvent"
            :is-loading="mutate.isPending.value"
          >
            Confirmar
          </Button>
        </div>
        <PopoverArrow class="fill-white stroke-black" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
