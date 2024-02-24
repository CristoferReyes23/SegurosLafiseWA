import { formSchema, initialValue } from "@/modules/Quote/utils/form.schema";
import { QuoteApi } from "@/shared/apis/quote.api";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { useFormik } from "formik";
import { useState } from "react";

const CreateQuoteHelper = () => {
  const [response, setResponse] = useState<QuoteResponseModel | null>(null);

  const onSubmitForm = (formData: any, { setSubmitting }: any) => {
    console.log(formData);

    QuoteApi.createQuote(formData)
      .then((resp) => {
        console.log(resp);
        setResponse(resp);
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

  return {
    onSubmitForm,
    response,
    formik,
  };
};

export default CreateQuoteHelper;
