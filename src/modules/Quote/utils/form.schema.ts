import { object, string } from "yup";
import { MESSAGES } from "@/shared/utils/formMessages";

export const formSchema = object({
  planId: string().required(MESSAGES.required),
  usoo: string().required(MESSAGES.required),
  anio: string().required(MESSAGES.required),
});

export const initialValue = {
  planId: "",
  anio: "",
  usoo: "",
};
