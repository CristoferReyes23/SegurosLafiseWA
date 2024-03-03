import { formSchema, initialValue } from "@/modules/Quote/utils/form.schema";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { QuoteService } from "@/shared/services/quote.service";
import { MESSAGES } from "@/shared/utils/formMessages";
import { useFormik } from "formik";
import { useRef, useState } from "react";

const CreateQuoteHelper = () => {
  const [response, setResponse] = useState<QuoteResponseModel | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const loadingRef = useRef<any>();

  const onSubmitForm = (formData: any) => {
    loadingRef.current?.show(true);

    QuoteService.queryCoverages(formData)
      .then((resp) => {
        setResponse(resp);
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage(err.type ? err.message : MESSAGES.unexpectedError);
        setResponse(null);
      })
      .finally(() => {
        loadingRef.current?.show(false);
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
    loadingRef,
    response,
    formik,
  };
};

export default CreateQuoteHelper;
