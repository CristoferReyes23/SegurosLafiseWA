import { FormikProps, getIn } from "formik";

export function getFormikProps(formik: FormikProps<any>, name: string) {
  const value = getIn(formik.values, name);
  const isInvalid = getIn(formik.errors, name) && getIn(formik.touched, name);

  return {
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: value ?? "",
    isInvalid,
    id: name,
    name,
  };
}

export function getFormikErrorField(formik: FormikProps<any>, name: string) {
  return getIn(formik.errors, name);
}

export interface FormikComponentProps {
  form: FormikProps<any>;
}
