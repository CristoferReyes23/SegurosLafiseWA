import { formSchema, initialValue } from "@/modules/Quote/utils/form.schema";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { QuoteService } from "@/shared/services/quote.service";
import { useFormik } from "formik";
import { useState } from "react";

const CreateQuoteHelper = () => {
  const [response, setResponse] = useState<QuoteResponseModel | null>(null);

  const onSubmitForm = (formData: any, { setSubmitting }: any) => {
    QuoteService.queryCoverages(formData)
      .then((resp) => {
        setResponse(resp);
      })
      .catch((err) => {
        console.log(err);
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

  return {
    onSubmitForm,
    response,
    formik,
  };
};

export default CreateQuoteHelper;
