import { formSchema, initialValue } from "@/modules/Quote/utils/form.schema";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { QuoteService } from "@/shared/services/quote.service";
import { useFormik } from "formik";
import { useState } from "react";

const CreateQuoteHelper = () => {
  const [response, setResponse] = useState<QuoteResponseModel | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitForm = (formData: any, { setSubmitting }: any) => {
    QuoteService.queryCoverages(formData)
      .then((resp) => {
        setResponse(resp);
        setErrorMessage("");
      })
      .catch((err) => {
        console.log(err);

        setErrorMessage(err.message);
        setResponse(null);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmitForm,
    validationSchema: formSchema,
  });

  const onCloseAlert = () => setErrorMessage("");

  return {
    errorMessage,
    onCloseAlert,
    onSubmitForm,
    response,
    formik,
  };
};

export default CreateQuoteHelper;
