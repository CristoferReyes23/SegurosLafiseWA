import { getFormikProps } from "@/modules/Policy/utils/getFormikProps";
import { FormikProps, FormikValues } from "formik";
import Feedback from "react-bootstrap/esm/Feedback";
import Form from "react-bootstrap/esm/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";

interface Props {
  name: string;
  form: FormikProps<FormikValues>;
  label: string;

  type?: string;
  placeholder?: string;
}

const GroupInputForm = ({ form, name, label, placeholder, type }: Props) => {
  const { errorMessage, ...defaultProps } = getFormikProps(form, name);

  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        placeholder={placeholder}
        {...defaultProps}
        type={type ?? "text"}
      />
      <Feedback type="invalid" tooltip>
        {errorMessage}
      </Feedback>
    </FormGroup>
  );
};

export default GroupInputForm;
