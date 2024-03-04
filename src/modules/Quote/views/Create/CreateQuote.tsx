import ErrorAlert from "@/modules/Quote/components/ErrorAlert";
import FormTemplate from "@/modules/Quote/components/FormTemplate";
import ResponseTemplate from "@/modules/Quote/components/ResponseTemplate";
import CreateQuoteHelper from "@/modules/Quote/views/Create/CreateQuote.helper";
import LoadingSpinner from "@/shared/components/LoadingSpinner/LoadingSpinner";

const CreateQuote = () => {
  const { formik, response, errorMessage, onCloseAlert, loadingRef } = CreateQuoteHelper();

  return (
    <div>
      <FormTemplate form={formik}>
        {errorMessage && <ErrorAlert message={errorMessage} onClose={onCloseAlert} />}
      </FormTemplate>
      {response && <ResponseTemplate response={response} />}

      <LoadingSpinner childRef={loadingRef} />
    </div>
  );
};

export default CreateQuote;
