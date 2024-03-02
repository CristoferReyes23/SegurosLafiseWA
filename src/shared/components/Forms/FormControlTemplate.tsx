import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import Feedback from "react-bootstrap/esm/Feedback";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errorMessage: string;
  isInvalid: boolean;
  isNumericOnly?: boolean;
}

const FormControlTemplate = ({ errorMessage, isInvalid, isNumericOnly, ...defaultProps }: Props) => {
  return (
    <>
      <input className={`form-control text-uppercase ${isInvalid ? "is-invalid" : ""}`} {...defaultProps} />
      <Feedback type="invalid">{errorMessage}</Feedback>
    </>
  );
};

export default FormControlTemplate;
