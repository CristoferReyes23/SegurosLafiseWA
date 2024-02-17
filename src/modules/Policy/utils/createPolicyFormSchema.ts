import ClientForm from "@/modules/Policy/components/Steps/ClientForm";
import PlanPolicy from "@/modules/Policy/components/Steps/PlanPolicy";
import VehicleForm from "@/modules/Policy/components/Steps/VehicleForm";
import { TypeStep } from "@/shared/utils/multiStepFormUtils";
import { string, number, object, date } from "yup";

export const stepsCreatePolicy: TypeStep[] = [
  {
    name: "step0",
    component: PlanPolicy,
    initialValues: {},
    validationSchema: object({
      planId: number().required(),
    }),
  },
  {
    name: "step1",
    component: VehicleForm,
    validationSchema: object({
      marcaId: number().required(),
      modeloId: number().required(),
      anio: number().required(),
      valorNuevo: number().required(),
      placa: string().required(),
      chasis: string().required(),
      color: string().required(),
      motor: string().required(),
      puertas: number().required(),
    }),
    initialValues: {},
  },
  {
    name: "step2",
    component: ClientForm,
    validationSchema: object({
      tipoId: string().required(),
      documentoIdentificacion: string().required(),
      nombre: string().required(),
      apellido: string().required(),
      sexo: string().required(),
      fechaNacimiento: date().required(),
      email: string().email().required(),
      telefono: string().required(),
      celular: string().required(),
      paisOrigen: number().required(),
      // provincia: number().required(),
      // canton: number().required(),
      distrito: number().required(),
      direccion: string().required(),
    }),
    initialValues: {},
  },
];
