import { SelectDataTemplate } from "@/shared/utils/formTypes";
import Feedback from "react-bootstrap/esm/Feedback";
import FormSelect, { FormSelectProps } from "react-bootstrap/esm/FormSelect";

interface Props extends FormSelectProps {
  firstOption?: SelectDataTemplate;
  data: SelectDataTemplate[];
  errorMessage: string;
}

const FormSelectTemplate = ({
  data,
  firstOption,
  errorMessage,
  ...defaultProps
}: Props) => {
  return (
    <>
      <FormSelect {...defaultProps}>
        {firstOption && (
          <option value={firstOption.value}>{firstOption.title}</option>
        )}
        {data?.map((i) => (
          <option value={i.value} key={i.value}>
            {i.title}
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
