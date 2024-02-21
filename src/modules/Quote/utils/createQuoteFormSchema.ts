/* ------------------------------- form object ------------------------------ */

import { object, string } from "yup";

export const formSchema = object({
  planId: string().required(),
  anio: string().required(),
});

export const initialValue = {
  planId: "",
  anio: "",
};
