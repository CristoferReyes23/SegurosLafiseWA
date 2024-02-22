import FormTemplate from "@/modules/Quote/components/FormTemplate";
import ResponseTemplate from "@/modules/Quote/components/ResponseTemplate";
import CreateQuoteHelper from "@/modules/Quote/views/Create/CreateQuote.helper";
import "./CreateQuote.css";

const CreateQuote = () => {
  const { formik, response } = CreateQuoteHelper();

  return (
    <div>
      <FormTemplate form={formik} />
      {response && <ResponseTemplate response={response} />}
    </div>
  );
};

export default CreateQuote;
