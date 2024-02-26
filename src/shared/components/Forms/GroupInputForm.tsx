import FormControlTemplate from "@/shared/components/Forms/FormControlTemplate";
import { getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import { FormikProps } from "formik";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  formik: FormikProps<any>;
  label: string;
  name: string;
}

const GroupInputForm = ({ formik, name, label, ...defaultProps }: Props) => {
  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <FormLabel>{label}</FormLabel>
      <FormControlTemplate
        errorMessage={getFormikErrorField(formik, name)}
        {...getFormikProps(formik, name)}
        {...defaultProps}
      />
    </FormGroup>
  );
};

export default GroupInputForm;
