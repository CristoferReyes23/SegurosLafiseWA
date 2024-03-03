import { validateDocumentType } from "@/shared/utils/validateDocumentType";

export const customValidation = (values: any) => {
  let errors = {};
  errors = { ...errors, ...validateDocumentType(values, "typeUserId", "userIdValue") };
  return errors;
};