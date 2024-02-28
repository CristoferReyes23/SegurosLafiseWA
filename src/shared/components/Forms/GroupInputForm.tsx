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
  regexValidation?: RegExp;
}

const GroupInputForm = ({ formik, name, label, regexValidation, ...defaultProps }: Props) => {
  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <FormLabel>{label}</FormLabel>
      <FormControlTemplate
        errorMessage={getFormikErrorField(formik, name)}
        {...getFormikProps(formik, name)}
        onChange={(e) => {
          if (regexValidation && !regexValidation.test(e.target.value)) {
            e.preventDefault();
            return;
          }
          formik.handleChange(e);
        }}
        {...defaultProps}
      />
    </FormGroup>
  );
};

export default GroupInputForm;
