import FormTemplate from "@/modules/Quote/components/FormTemplate";
import ResponseTemplate from "@/modules/Quote/components/ResponseTemplate";
import CreateQuoteHelper from "@/modules/Quote/views/Create/CreateQuote.helper";

const CreateQuote = () => {
  const { formik, response } = CreateQuoteHelper();

  return (
    <div>
      <FormTemplate form={formik} />
      {response && !formik.isSubmitting && <ResponseTemplate response={response} />}
    </div>
  );
};

export default CreateQuote;
