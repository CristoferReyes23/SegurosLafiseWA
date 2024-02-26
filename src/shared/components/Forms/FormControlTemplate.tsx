import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errorMessage: string;
  isInvalid: boolean;
}

const FormControlTemplate = ({ errorMessage, type, isInvalid, ...defaultProps }: Props) => {
  return (
    <>
      <input className={`form-control ${isInvalid && "is-invalid"}`} {...defaultProps} />
      <div className="invalid-tooltip">{errorMessage}</div>
    </>
  );
};

export default FormControlTemplate;
