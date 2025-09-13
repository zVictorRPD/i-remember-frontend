import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

export const eventInitialValues = {
  name: "",
  category: "",
  date: "",
  description: "",
  time: "",
  location: "",
  facebook: "",
  instagram: "",
  twitter: "",
  email: "",
  whatsApp: "",
};

const eventZodSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  category: z.string().min(1, "Categoria é obrigatória"),
  date: z.string().min(1, "Data é obrigatória"),
  description: z.string().optional(),
  time: z.string().optional(),
  location: z.string().optional(),
  facebook: z
    .string()
    .url("URL do Facebook inválida")
    .optional()
    .or(z.literal("")),
  instagram: z
    .string()
    .url("URL do Instagram inválida")
    .optional()
    .or(z.literal("")),
  twitter: z
    .string()
    .url("URL do Twitter inválida")
    .optional()
    .or(z.literal("")),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  whatsApp: z.string().optional(),
});

export const eventValidationSchema = toTypedSchema(eventZodSchema);

export type TEventFormValues = z.infer<typeof eventZodSchema>;
