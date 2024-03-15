export enum EnumDocumentTypeValues {
  RUC = "4",
  CEDULA = "1",
}

export const ConstRegex = {
  onlyNumberDigit: /^[0-9]*$/,
  onlyNumbers: /^\d*\.?\d*$/,

  rucValidation: /^[A-Za-z]\d{14}$/,
  cedulaValidation: /^\d{3}-\d{6}-\d{4}[A-Za-z]$/,
};

export enum EnumDocumentMaskTemplateValues {
  RUC = "a00000000000000",
  CEDULA = "000-000000-0000a",
}

export enum EnumConstFormValues {
  typeDocumentation = 1,
  planId = 477,
  niCountry = 505,
}
