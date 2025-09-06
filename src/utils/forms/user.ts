import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

export const loginUserInitialValues = {
  email: "",
  password: "",
};

export const registerUserInitialValues = {
  ...loginUserInitialValues,
  name: "",
  confirmPassword: "",
};

const loginUserObject = {
  email: z.email("E-mail inválido").min(1, "E-mail é obrigatório"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
};

const loginUserZodSchema = z.object(loginUserObject);
export const loginUserValidationSchema = toTypedSchema(loginUserZodSchema);

export type TLoginUserFormValues = z.infer<typeof loginUserZodSchema>;

const registerUserZodSchema = z
  .object({
    ...loginUserObject,
    name: z.string().min(1, "Nome é obrigatório"),
    confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export const registerUserValidationSchema = toTypedSchema(
  registerUserZodSchema
);

export type TRegisterUserFormValues = z.infer<typeof registerUserZodSchema>;
