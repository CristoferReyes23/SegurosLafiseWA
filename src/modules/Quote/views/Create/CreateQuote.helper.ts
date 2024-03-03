import { formSchema, initialValue } from "@/modules/Quote/utils/form.schema";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { QuoteService } from "@/shared/services/quote.service";
import { useFormik } from "formik";
import { useRef, useState } from "react";

const CreateQuoteHelper = () => {
  const [response, setResponse] = useState<QuoteResponseModel | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const loadingRef = useRef<any>();

  const onSubmitForm = (formData: any, { setSubmitting }: any) => {
    loadingRef.current?.show(true);

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
        loadingRef.current?.show(false);
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
    loadingRef,
    response,
    formik,
  };
};

export default CreateQuoteHelper;
