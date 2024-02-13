import { FormikProps, FormikValues, getIn } from "formik";

interface Props {
  form: FormikProps<FormikValues>;
  name: string;
}

const useFormProps = ({ form, name }: Props) => {
  const value = getIn(form.values, name);
  const isValid = getIn(form.errors, name) && getIn(form.touched, name);
  const errorMessages = getIn(form.errors, name);

  return {
    value,
    isValid,
    errorMessages,
  };
};

export default useFormProps;
