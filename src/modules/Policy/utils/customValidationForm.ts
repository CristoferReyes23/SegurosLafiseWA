import { EnumIndexPages } from "@/modules/Policy/utils/enumPages";
import { validateDocumentType } from "@/shared/utils/validateDocumentType";

export const customValidation = (values: any, currentIndex: number) => {
  let errors = {};

  if (currentIndex === EnumIndexPages.client) {
    errors = validateDocumentType(values, "tipoId", "documentoIdentificacion");
  }

  return errors;
};
