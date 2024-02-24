import { SelectDataTemplate } from "@/shared/utils/formTypes";
import Feedback from "react-bootstrap/esm/Feedback";
import FormSelect, { FormSelectProps } from "react-bootstrap/esm/FormSelect";

interface Props extends FormSelectProps {
  firstOptionEmpty?: string;
  data: SelectDataTemplate[];
  errorMessage: string;
}

const FormSelectTemplate = ({ data, errorMessage, firstOptionEmpty, ...defaultProps }: Props) => {
  return (
    <>
      <FormSelect {...defaultProps}>
        {firstOptionEmpty && <option value={""}>{firstOptionEmpty}</option>}
        {data?.map((i) => (
          <option value={i.id} key={i.id}>
            {i.text}
          </option>
        ))}
      </FormSelect>
      <Feedback type="invalid" tooltip>
        {errorMessage}
      </Feedback>
    </>
  );
};

export default FormSelectTemplate;
