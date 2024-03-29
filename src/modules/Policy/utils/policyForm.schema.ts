import { TypeStep } from "@/modules/Policy/utils/multiStepFormUtils";
import { MESSAGES } from "@/shared/utils/formMessages";
import { string, number, object, date } from "yup";

const minBirthday = () => {
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - Number(import.meta.env.VITE_BIRTHDAY_MIN));
  return minDate;
};

const maxBirthday = () => {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 100);
  return maxDate.toISOString().split("T")[0];
};

export const stepsCreatePolicy: TypeStep[] = [
  {
    titleHeaderStep: "Complete la información del vehículo",
    initialValues: {},
    validationSchema: object({
      planId: number().required(MESSAGES.required),
      marcaId: number().required(MESSAGES.required),
      modeloId: number().required(MESSAGES.required),
      anio: number().required(MESSAGES.required),
      valorNuevo: number().required(MESSAGES.required),
      placa: string().required(MESSAGES.required),
      chasis: string().required(MESSAGES.required),
      color: string().required(MESSAGES.required),
      motor: string().required(MESSAGES.required),
      usoo: string().required(MESSAGES.required),
      puertas: number().required(MESSAGES.required),
    }),
  },
  {
    titleHeaderStep: "Complete la información del cliente",
    validationSchema: object({
      tipoId: string().required(MESSAGES.required),
      documentoIdentificacion: string().required(MESSAGES.required),
      nombre: string().required(MESSAGES.required),
      apellido: string().required(MESSAGES.required),
      sexo: string().required(MESSAGES.required),
      fechaNacimiento: date()
        .required(MESSAGES.required)
        .min(maxBirthday(), MESSAGES.minBirthday)
        .max(minBirthday(), MESSAGES.maxBirthday),
      email: string().email(MESSAGES.email).required(MESSAGES.required),
      celular: string().length(8, MESSAGES.lengthPhoneNumber).required(MESSAGES.required),
      telefono: string().length(8, MESSAGES.lengthPhoneNumber),
      paisOrigen: number().required(MESSAGES.required),
      provincia: number().required(MESSAGES.required),
      canton: number().required(MESSAGES.required),
      distrito: number().required(MESSAGES.required),
      direccion: string().required(MESSAGES.required),
      profesion: string().required(MESSAGES.required),
    }),
    initialValues: {},
  },
  {
    initialValues: {},
    titleHeaderStep: "Confirme el pago",
    validationSchema: object({}),
  },
];
