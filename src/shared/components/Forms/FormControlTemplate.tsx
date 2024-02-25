import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errorMessage: string;
  type?: string;
  placeHolder?: string;
}

const FormControlTemplate = ({ errorMessage, type, placeHolder, ...defaultProps }: Props) => {
  return (
    <>
      <input className="form-control" type={type ?? "text"} {...defaultProps} placeholder={placeHolder} />
      <div className="invalid-tooltip">{errorMessage}</div>
    </>
  );
};

export default FormControlTemplate;
