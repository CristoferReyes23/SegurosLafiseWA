import { getFormikErrorField, getFormikProps } from "@/modules/Policy/utils/getFormikProps";
import { FormikProps, FormikValues } from "formik";
import Feedback from "react-bootstrap/esm/Feedback";
import FormControl, { FormControlProps } from "react-bootstrap/esm/FormControl";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";

interface Props extends FormControlProps {
  name: string;
  form: FormikProps<FormikValues>;
  label: string;
  rows?: number;
}

const GroupInputForm = ({ form, name, label, ...defaultProps }: Props) => {
  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <FormLabel>{label}</FormLabel>
      <FormControl {...getFormikProps(form, name)} {...defaultProps} />
      <Feedback type="invalid" tooltip>
        {getFormikErrorField(form, name)}
      </Feedback>
    </FormGroup>
  );
};

export default GroupInputForm;
