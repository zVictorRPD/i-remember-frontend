<script setup lang="ts">
import Input from "@/components/ui/Input.vue";
import { Field } from "vee-validate";
</script>

<template>
  <div class="grid grid-cols-2 gap-2.5">
    <div class="flex flex-col gap-1.5">
      <label for="name" class="font-medium">Nome</label>
      <Field name="name" v-slot="{ field, errorMessage }">
        <Input id="name" type="text" v-bind="field" :error="errorMessage" />
      </Field>
    </div>
    <div class="flex flex-col gap-1.5">
      <label for="category" class="font-medium">Categoria</label>
      <Field name="category" v-slot="{ field, errorMessage }">
        <Input id="category" type="text" v-bind="field" :error="errorMessage" />
      </Field>
    </div>
    <div class="flex flex-col gap-1.5">
      <label for="date" class="font-medium">Data</label>
      <Field name="date" v-slot="{ field, errorMessage }">
        <Input id="date" type="date" v-bind="field" :error="errorMessage" />
      </Field>
    </div>
    <div class="flex flex-col gap-1.5">
      <label for="time" class="font-medium">Horário</label>
      <Field name="time" v-slot="{ field, errorMessage }">
        <Input id="time" type="time" v-bind="field" :error="errorMessage" />
      </Field>
    </div>
    <div class="flex flex-col gap-1.5 col-span-2">
      <label for="description" class="font-medium">Descrição</label>
      <Field name="description" v-slot="{ field, errorMessage }">
        <Input
          id="description"
          type="text"
          v-bind="field"
          :error="errorMessage"
        />
      </Field>
    </div>
    <div class="flex flex-col gap-1.5">
      <label for="location" class="font-medium">Localização</label>
      <Field name="location" v-slot="{ field, errorMessage }">
        <Input id="location" type="text" v-bind="field" :error="errorMessage" />
      </Field>
    </div>
    <div class="flex flex-col gap-1.5">
      <label for="facebook" class="font-medium">Facebook</label>
      <Field name="facebook" v-slot="{ field, errorMessage }">
        <Input id="facebook" type="url" v-bind="field" :error="errorMessage" />
      </Field>
    </div>
    <div class="flex flex-col gap-1.5">
      <label for="instagram" class="font-medium">Instagram</label>
      <Field name="instagram" v-slot="{ field, errorMessage }">
        <Input id="instagram" type="url" v-bind="field" :error="errorMessage" />
      </Field>
    </div>
    <div class="flex flex-col gap-1.5">
      <label for="twitter" class="font-medium">Twitter</label>
      <Field name="twitter" v-slot="{ field, errorMessage }">
        <Input id="twitter" type="url" v-bind="field" :error="errorMessage" />
      </Field>
    </div>
    <div class="flex flex-col gap-1.5">
      <label for="email" class="font-medium">E-mail</label>
      <Field name="email" v-slot="{ field, errorMessage }">
        <Input id="email" type="email" v-bind="field" :error="errorMessage" />
      </Field>
    </div>
    <div class="flex flex-col gap-1.5">
      <label for="whatsApp" class="font-medium">WhatsApp</label>
      <Field name="whatsApp" v-slot="{ field, errorMessage }">
        <Input id="whatsApp" type="text" v-bind="field" :error="errorMessage" />
      </Field>
    </div>
  </div>
</template>
