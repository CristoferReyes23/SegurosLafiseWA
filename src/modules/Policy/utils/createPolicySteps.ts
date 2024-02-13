import ClientForm from "@/modules/Policy/components/CreatePolicySteps/ClientForm";
import VehicleForm from "@/modules/Policy/components/CreatePolicySteps/VehicleForm";
import { TypeStep } from "@/shared/utils/multiStepFormUtils";
import { string, number, object, date } from "yup";

export const stepsCreatePolicy: TypeStep[] = [
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
    initialValues: {
      marcaId: null,
      modeloId: null,
      anio: null,
      valorNuevo: null,
      placa: null,
      chasis: null,
      color: null,
      motor: null,
      puertas: null,
    },
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
      provincia: number().required(),
      canton: number().required(),
      distrito: number().required(),
      direccion: string().required(),
    }),
    initialValues: {
      tipoId: null,
      documentoIdentificacion: null,
      nombre: null,
      apellido: null,
      sexo: null,
      fechaNacimiento: null,
      email: null,
      telefono: null,
      celular: null,
      paisOrigen: null,
      provincia: null,
      canton: null,
      distrito: null,
      direccion: null,
    },
  },
];
