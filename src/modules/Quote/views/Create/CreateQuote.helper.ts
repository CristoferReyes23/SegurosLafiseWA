import { useFormik } from "formik";
import { object, string } from "yup";

/* ------------------------------- form object ------------------------------ */

export const formSchema = object({
  planId: string().required(),
});

export const initialValue = {
  planId: "",
};

/* ----------------------------- end form object ---------------------------- */

const CreateQuoteHelper = () => {
  const formik = useFormik({
    validationSchema: formSchema,
    initialValues: { ...initialValue },
    onSubmit: (data) => onSubmitForm(data),
  });

  const onSelectPlanId = (e: any) => {
    formik.setFieldValue("planId", e.target.value);
    console.log(e);
  };

  const onSubmitForm = (data: any) => {
    console.log("ok aqui voy");

    console.log(data);
  };

  return {
    formik,
    onSelectPlanId,
  };
};

export default CreateQuoteHelper;
