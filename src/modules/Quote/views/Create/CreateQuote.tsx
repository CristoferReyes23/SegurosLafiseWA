import FormTemplate from "@/modules/Quote/components/FormTemplate";
import ResponseTemplate from "@/modules/Quote/components/ResponseTemplate";
import ErrorAlert from "@/modules/Quote/components/errorAlert";
import CreateQuoteHelper from "@/modules/Quote/views/Create/CreateQuote.helper";

const CreateQuote = () => {
  const { formik, response, errorMessage, onCloseAlert } = CreateQuoteHelper();

  return (
    <div>
      <FormTemplate form={formik}>
        {errorMessage && <ErrorAlert message={errorMessage} onClose={onCloseAlert} />}
      </FormTemplate>
      {response && !formik.isSubmitting && <ResponseTemplate response={response} />}
    </div>
  );
};

export default CreateQuote;
