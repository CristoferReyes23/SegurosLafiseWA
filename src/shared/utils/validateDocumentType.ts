import { MESSAGES } from "@/shared/utils/formMessages";

export function validateDocumentType(values: any, propertyDep: string, propertyName: string) {
  const errors: any = {};

  const regexMap: any = {
    "2": /^[A-Za-z]\d{14}$/, // ruc
    "1": /^\d{3}-\d{6}-\d{4}[A-Za-z]$/,
  };

  const selected = values[propertyDep];
  const regexPattern = regexMap[selected];

  if (regexPattern && !values[propertyName].match(regexPattern)) errors[propertyName] = MESSAGES.invalidFormatDocument;

  return errors;
}
