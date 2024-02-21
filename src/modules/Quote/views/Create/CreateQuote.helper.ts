/* ----------------------------- end form object ---------------------------- */

const CreateQuoteHelper = () => {
  const onSubmitForm = (data: any, { setSubmitting }: any) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return {
    onSubmitForm,
  };
};

export default CreateQuoteHelper;
