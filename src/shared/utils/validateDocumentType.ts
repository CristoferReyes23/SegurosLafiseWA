import { ConstRegex } from "@/shared/utils/constValues";
import { EnumDocumentTypeValues } from "@/shared/utils/constValues";
import { MESSAGES } from "@/shared/utils/formMessages";
import { AnyObject, StringSchema } from "yup";

export function validationDocumentValue(
  typeIdValue: string,
  schema: StringSchema<string | undefined, AnyObject, undefined, "">
) {
  const regexMap: any = {
    [EnumDocumentTypeValues.RUC]: ConstRegex.rucValidation,
    [EnumDocumentTypeValues.CEDULA]: ConstRegex.cedulaValidation,
  };

  const regexPattern = regexMap[typeIdValue];
  if (!regexPattern) return schema.required(MESSAGES.required);

  return schema.matches(regexPattern, MESSAGES.invalidFormatDocument).required(MESSAGES.required);
}
