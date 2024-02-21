import Feedback from "react-bootstrap/esm/Feedback";
import FormControl, { FormControlProps } from "react-bootstrap/esm/FormControl";

interface Props extends FormControlProps {
  errorMessage: string;
  type?: string;
  placeHolder?: string;
}

const FormControlTemplate = ({ errorMessage, type, placeHolder, ...defaultProps }: Props) => {
  return (
    <>
      <FormControl {...defaultProps} type={type ?? "text"} placeholder={placeHolder} />
      <Feedback type="invalid" tooltip>
        {errorMessage}
      </Feedback>
    </>
  );
};

export default FormControlTemplate;
