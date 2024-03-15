import { object, string } from "yup";
import { MESSAGES } from "@/shared/utils/formMessages";
import { EnumConstFormValues } from "@/shared/utils/constValues";

export const formSchema = object({
  planId: string().required(MESSAGES.required),
  usoo: string().required(MESSAGES.required),
  anio: string().required(MESSAGES.required),
});

export const initialValue = {
  planId: EnumConstFormValues.planId,
  anio: "",
  usoo: "",
};
