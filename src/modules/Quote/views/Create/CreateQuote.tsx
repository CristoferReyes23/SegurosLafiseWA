import CreateQuoteHelper from "@/modules/Quote/views/Create/CreateQuote.helper";
import FormTemplate from "@/modules/Quote/components/FormTemplate";

const CreateQuote = () => {
  const { onSubmitForm } = CreateQuoteHelper();

  return (
    <div>
      <FormTemplate onSubmitForm={onSubmitForm} />
    </div>
  );
};

export default CreateQuote;
