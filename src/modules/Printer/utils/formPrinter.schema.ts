import { object, string } from "yup";
import { MESSAGES } from "@/shared/utils/formMessages";

export const formSchema = object({
  typeUserId: string().required(MESSAGES.required),
  userIdValue: string().required(MESSAGES.required),
});

export const initialValue = {
  typeUserId: "",
  userIdValue: "",
};
