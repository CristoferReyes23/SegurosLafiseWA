import useFormProps from "@/shared/hooks/useFormProps";
import { SelectDataTemplate } from "@/shared/utils/formTypes";
import { FormikProps, FormikValues } from "formik";
import Feedback from "react-bootstrap/esm/Feedback";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import FormSelect from "react-bootstrap/esm/FormSelect";

interface Props {
  dataSource: SelectDataTemplate[];
  label: string;

  form: FormikProps<FormikValues>;
  name: string;
}

export const GroupSelectForm = ({ dataSource, form, label, name }: Props) => {
  const { errorMessages, isValid, value } = useFormProps({ form, name });

  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <FormLabel>{label}</FormLabel>
      <FormSelect
        onBlur={form.handleBlur}
        onChange={form.handleChange}
        value={value ?? ""}
        name={name}
        id={name}
        isValid={isValid}
      >
        {dataSource.map((i) => (
          <option value={i.value} key={i.value}>
            {i.title}
          </option>
        ))}
      </FormSelect>

      <Feedback type="invalid" tooltip>
        {errorMessages}
      </Feedback>
    </FormGroup>
  );
};
