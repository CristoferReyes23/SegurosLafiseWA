import { SelectDataTemplate } from "@/shared/utils/formTypes";
import { memo } from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import FormSelect, { FormSelectProps } from "react-bootstrap/esm/FormSelect";

interface Props extends FormSelectProps {
  firstOptionEmpty?: string;
  data: SelectDataTemplate[];
  errorMessage: string;
  isInvalid: boolean;
}

const FormSelectTemplate = memo(({ data, errorMessage, firstOptionEmpty, ...defaultProps }: Props) => {
  const withoutSelectDefault = data.filter((i) => i.id != "0");

  return (
    <>
      <FormSelect className="" {...defaultProps}>
        {firstOptionEmpty && <option value={""}>{firstOptionEmpty}</option>}
        {withoutSelectDefault?.map((i) => (
          <option value={i.id} key={i.id}>
            {i.text}
          </option>
        ))}
      </FormSelect>
      <Feedback type="invalid">{errorMessage}</Feedback>
    </>
  );
});

export default FormSelectTemplate;
