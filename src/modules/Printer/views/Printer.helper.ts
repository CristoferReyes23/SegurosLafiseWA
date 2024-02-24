import { formSchema } from "@/modules/Printer/utils/formPrinter.schema";
import { useFormik } from "formik";

const PrinterHelper = () => {
  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: onSubmit,
    validationSchema: formSchema,
  });

  return {
    formik,
  };
};

export default PrinterHelper;
