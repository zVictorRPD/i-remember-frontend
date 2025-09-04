<script setup lang="ts">
function handleSubmitForm() {
  console.log("submit");
}
</script>

<template>
  <form @submit.prevent="handleSubmitForm">
    <div class="grid grid-cols-2 gap-2.5">
      <div class="flex flex-col gap-1.5">
        <label for="name" class="font-medium">Nome</label>
        <input
          id="name"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  </form>
</template>
