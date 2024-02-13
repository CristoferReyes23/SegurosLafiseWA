import useFormProps from "@/shared/hooks/useFormProps";
import { FormikProps, FormikValues } from "formik";
import { useEffect, useState } from "react";
import Feedback from "react-bootstrap/esm/Feedback";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import FormSelect from "react-bootstrap/esm/FormSelect";

interface Props {
  form: FormikProps<FormikValues>;
  name: string;
}

const ModelSelect = ({ form, name }: Props) => {
  const { isValid, value, errorMessages } = useFormProps({ form, name });
  const [data, setData] = useState<Array<{ id: string; text: string }>>([]);

  useEffect(() => {
    if (form.values["marcaId"]) {
      form.setFieldValue(name, null);
      setData([{ id: "2", text: "asdasds" }]);
      console.log("ok aqui voy");
    }
  }, [form.values["marcaId"]]);

  return (
    <FormGroup className="position-relative mb-3" id={`inputGroup-${name}`}>
      <FormLabel>Marca</FormLabel>

      <FormSelect
        onBlur={form.handleBlur}
        onChange={form.handleChange}
        value={value ?? ""}
        name={name}
        id={name}
        isValid={!!isValid}
      >
        <option value="">Seleccione marca</option>
        {data?.map((i) => (
          <option value={i.id}>{i.text}</option>
        ))}
      </FormSelect>

      <Feedback type="invalid" tooltip>
        {errorMessages}
      </Feedback>
    </FormGroup>
  );
};

export default ModelSelect;
