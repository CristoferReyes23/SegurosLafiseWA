import { ConstRegex } from "@/shared/utils/constRegex";
import { EnumDocumentTypeValues } from "@/shared/utils/constValues";
import { MESSAGES } from "@/shared/utils/formMessages";

export function validateDocumentType(values: any, propertyDep: string, propertyName: string) {
  const errors: any = {};

  const regexMap: any = {
    [EnumDocumentTypeValues.RUC]: ConstRegex.rucValidation,
    [EnumDocumentTypeValues.CEDULA]: ConstRegex.cedulaValidation,
  };

  const selected = values[propertyDep];
  const regexPattern = regexMap[selected];

  if (regexPattern && !values[propertyName].match(regexPattern)) errors[propertyName] = MESSAGES.invalidFormatDocument;

  return errors;
}
