<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import Input from "@/components/ui/Input.vue";
import { useToast } from "@/composables/useToast";
import { useUserStore } from "@/stores/user";
import {
  registerUserValidationSchema,
  type TRegisterUserFormValues,
} from "@/utils/forms/user";
import { registerUserService } from "@/utils/services/auth";
import { useMutation } from "@tanstack/vue-query";
import { Field, Form } from "vee-validate";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const { showToast } = useToast();

const mutate = useMutation({
  mutationFn: registerUserService,
  onSuccess: (data) => {
    userStore.setUser(data.data);
    showToast({
      title: "Sucesso",
      description: "Conta criada com sucesso!",
      type: "success",
    });
    router.push("/");
  },
  onError: (error: any) => {
    showToast({
      title: "Erro",
      description:
        error?.message || "Ocorreu um erro ao criar a conta",
      type: "error",
    });
  },
});

function handleFormSubmit(v: any) {
  const values = v as TRegisterUserFormValues;
  mutate.mutate(values);
}
</script>

<template>
  <div class="flex items-center justify-center flex-col gap-3 md:gap-6">
    <h1 class="text-2xl font-medium">Crie sua conta</h1>
    <Form
      id="register-user-form"
      :validation-schema="registerUserValidationSchema"
      class="space-y-3 w-full"
      :initial-values="userStore.newUser"
      @submit="handleFormSubmit"
    >
      <div class="flex flex-col gap-1.5">
        <label for="name" class="font-medium">Nome</label>
        <Field name="name" v-slot="{ field, errorMessage }">
          <Input id="name" type="text" v-bind="field" :error="errorMessage" />
        </Field>
      </div>
      <div class="flex flex-col gap-1.5">
        <label for="email" class="font-medium">E-mail</label>
        <Field name="email" v-slot="{ field, errorMessage }">
          <Input id="email" type="email" v-bind="field" :error="errorMessage" />
        </Field>
      </div>
      <div class="flex flex-col gap-1.5">
        <label for="password" class="font-medium">Senha</label>
        <Field name="password" v-slot="{ field, errorMessage }">
          <Input
            id="password"
            type="password"
            v-bind="field"
            :error="errorMessage"
          />
        </Field>
      </div>
      <div class="flex flex-col gap-1.5">
        <label for="confirmPassword" class="font-medium">Confirmar Senha</label>
        <Field name="confirmPassword" v-slot="{ field, errorMessage }">
          <Input
            id="confirmPassword"
            type="password"
            v-bind="field"
            :error="errorMessage"
          />
        </Field>
      </div>
      <Button type="submit" class="w-full" :is-loading="mutate.isPending.value">
        Criar conta
      </Button>
    </Form>
    <p class="text-sm text-gray-500 dark:text-gray-300">
      Já possui uma conta?
      <router-link
        to="/auth/login"
        class="text-header font-medium hover:underline cursor-pointer dark:text-sky-300"
      >
        Entre agora
      </router-link>
    </p>
  </div>
</template>
