import { object, string } from "yup";
import { MESSAGES } from "@/shared/utils/formMessages";
import { EnumConstFormValues } from "@/shared/utils/constValues";
import { validationDocumentValue } from "@/shared/utils/validateDocumentType";

export const formSchema = object({
  tipoId: string().required(MESSAGES.required),
  documentoIdentificacion: string().when("tipoId", (typeIdValue, schema) => {
    return validationDocumentValue(String(typeIdValue), schema);
  }),
});

export const initialValue = {
  tipoId: EnumConstFormValues.typeDocumentation,
  documentoIdentificacion: "",
};
