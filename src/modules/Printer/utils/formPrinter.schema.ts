import { object, string } from "yup";
import { MESSAGES } from "@/shared/utils/formMessages";

export const formSchema = object({
  tipoId: string().required(MESSAGES.required),
  documentoIdentificacion: string().required(MESSAGES.required),
});

export const initialValue = {
  tipoId: "",
  documentoIdentificacion: "",
};
