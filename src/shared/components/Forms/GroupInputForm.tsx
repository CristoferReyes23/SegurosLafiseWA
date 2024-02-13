import { FormikProps, FormikValues, getIn } from "formik";
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
  const value = getIn(form.values, name);
  const error = getIn(form.errors, name) && getIn(form.touched, name);
  const errorMessages = getIn(form.errors, name);

  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type ?? "text"}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value ?? ""}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        isInvalid={!!error}
      />
      <Feedback type="invalid" tooltip>
        {errorMessages}
      </Feedback>
    </FormGroup>
  );
};

export default GroupInputForm;
