import { object, string } from "yup";
import { MESSAGES } from "@/shared/utils/formMessages";
import { EnumConstFormValues } from "@/shared/utils/constValues";

export const formSchema = object({
  tipoId: string().required(MESSAGES.required),
  documentoIdentificacion: string().required(MESSAGES.required),
});

export const initialValue = {
  tipoId: EnumConstFormValues.typeDocumentation,
  documentoIdentificacion: "",
};
