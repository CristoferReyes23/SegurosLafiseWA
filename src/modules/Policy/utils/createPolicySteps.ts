import ClientForm from "@/modules/Policy/components/CreatePolicySteps/ClientForm";
import QuoteForm from "@/modules/Policy/components/CreatePolicySteps/QuoteForm";
import VehicleForm from "@/modules/Policy/components/CreatePolicySteps/VehicleForm";
import { TypeStep } from "@/shared/utils/multiStepFormUtils";
import * as Yup from "yup";

export const stepsCreatePolicy: TypeStep[] = [
  {
    name: "step1",
    component: QuoteForm,
    validationSchema: Yup.object({
      quoteId: Yup.string().required(),
    }),
    initialValues: {
      quoteId: "",
    },
  },
  {
    name: "step2",
    component: VehicleForm,
    validationSchema: Yup.object({
      brandId: Yup.string().required(),
    }),
    initialValues: {
      brandId: "",
    },
  },
  {
    name: "step3",
    component: ClientForm,
    validationSchema: Yup.object({}),
    initialValues: {},
  },
];
