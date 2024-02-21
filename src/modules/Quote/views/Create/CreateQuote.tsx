import FormTemplate2 from "@/modules/Quote/components/FormTemplate2";
import ResponseTemplate from "@/modules/Quote/components/ResponseTemplate";
import CreateQuoteHelper from "@/modules/Quote/views/Create/CreateQuote.helper";

const CreateQuote = () => {
  const { formik, response } = CreateQuoteHelper();

  return (
    <div>
      <FormTemplate2 form={formik} />
      {response && <ResponseTemplate response={response} />}
    </div>
  );
};

export default CreateQuote;
