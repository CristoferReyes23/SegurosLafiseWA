import ClientForm from "@/modules/Policy/components/Steps/ClientForm";
import PlanPolicy from "@/modules/Policy/components/Steps/PlanPolicy";
import VehicleForm from "@/modules/Policy/components/Steps/VehicleForm";
import VerifyForm from "@/modules/Policy/components/Steps/VerifyForm";
import { TypeStep } from "@/modules/Policy/utils/multiStepFormUtils";
import { MESSAGES } from "@/shared/utils/formMessages";
import { string, number, object, date } from "yup";

export const stepsCreatePolicy: TypeStep[] = [
  {
    component: VerifyForm,
    initialValues: {},
    name: "VerifyForm",
    titleHeaderStep: "",
    validationSchema: object({}),
  },
  {
    name: "step0",
    component: PlanPolicy,
    titleHeaderStep: "Seleccione el plan de la póliza",
    initialValues: {},
    validationSchema: object({
      planId: number().required(MESSAGES.required),
    }),
  },
  {
    name: "step1",
    component: VehicleForm,
    titleHeaderStep: "Complete la información del vehículo",
    validationSchema: object({
      marcaId: number().required(MESSAGES.required),
      modeloId: number().required(MESSAGES.required),
      anio: number().required(MESSAGES.required),
      valorNuevo: number().required(MESSAGES.required),
      placa: string().required(MESSAGES.required),
      chasis: string().required(MESSAGES.required),
      color: string().required(MESSAGES.required),
      motor: string().required(MESSAGES.required),
      puertas: number().required(MESSAGES.required),
    }),
    initialValues: {},
  },
  {
    name: "step2",
    component: ClientForm,
    titleHeaderStep: "Complete la información del cliente",
    validationSchema: object({
      tipoId: string().required(MESSAGES.required),
      documentoIdentificacion: string().required(MESSAGES.required),
      nombre: string().required(MESSAGES.required),
      apellido: string().required(MESSAGES.required),
      sexo: string().required(MESSAGES.required),
      fechaNacimiento: date()
        .required(MESSAGES.required)
        .min(new Date().getFullYear() - 100, "Debes tener al menos 100 años.")
        .max(new Date(), "La fecha de nacimiento no puede ser en el futuro."),
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
];
