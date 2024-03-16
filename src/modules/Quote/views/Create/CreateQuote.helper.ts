import { formSchema, initialValue } from "@/modules/Quote/utils/form.schema";
import { useLoading } from "@/shared/contexts/LoadingWrapper";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { QuoteService } from "@/shared/services/quote.service";
import { MESSAGES } from "@/shared/utils/formMessages";
import { useFormik } from "formik";
import { useState } from "react";

const CreateQuoteHelper = () => {
  const [response, setResponse] = useState<QuoteResponseModel | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const loading = useLoading();

  const onSubmitForm = (formData: any) => {
    setResponse(null);

    loading.show();

    QuoteService.queryCoverages(formData)
      .then((resp) => {
        setResponse(resp.coverages);
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage(err.type ? err.message : MESSAGES.unexpectedError);
        setResponse(null);
      })
      .finally(() => {
        loading.hide();
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
