<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import Input from "@/components/ui/Input.vue";
import { useToast } from "@/composables/useToast";
import { useUserStore } from "@/stores/user";
import {
  loginUserValidationSchema,
  type TLoginUserFormValues,
} from "@/utils/forms/user";
import { loginUserService } from "@/utils/services/auth";
import { useMutation } from "@tanstack/vue-query";
import { Field, Form } from "vee-validate";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const { showToast } = useToast();

const mutate = useMutation({
  mutationFn: loginUserService,
  onSuccess: (data) => {
    userStore.setUser(data.data);
    showToast({
      title: "Sucesso",
      description: "Login realizado com sucesso!",
      type: "success",
    });
    router.push("/");
  },
  onError: (error: any) => {
    showToast({
      title: "Erro",
      description:
        error?.message ||
        "Ocorreu um erro ao realizar o login",
      type: "error",
    });
  },
});

function handleFormSubmit(v: any) {
  const values = v as TLoginUserFormValues;
  mutate.mutate(values);
}
</script>

<template>
  <div class="flex items-center justify-center flex-col gap-3 md:gap-6">
    <h1 class="text-2xl font-medium">Entre em sua conta</h1>
    <Form
      id="login-user-form"
      :validation-schema="loginUserValidationSchema"
      class="space-y-3 w-full"
      :initial-values="userStore.loginUser"
      @submit="handleFormSubmit"
    >
      <div class="flex flex-col gap-1.5">
        <label for="email" class="font-medium">E-mail</label>
        <Field name="email" v-slot="{ field, errorMessage }">
          <Input id="email" type="text" v-bind="field" :error="errorMessage" />
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
      <Button type="submit" class="w-full" :is-loading="mutate.isPending.value">
        Entrar
      </Button>
    </Form>
    <p class="text-sm text-gray-500 dark:text-gray-300">
      Não possui uma conta?
      <router-link
        to="/auth/register"
        class="text-header font-medium hover:underline cursor-pointer dark:text-sky-300"
      >
        Crie agora
      </router-link>
    </p>
  </div>
</template>
