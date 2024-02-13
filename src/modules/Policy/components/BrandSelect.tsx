import useFetch from "@/shared/hooks/useFetch";
import useFormProps from "@/shared/hooks/useFormProps";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import { FormikProps, FormikValues } from "formik";
import Feedback from "react-bootstrap/esm/Feedback";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import FormSelect from "react-bootstrap/esm/FormSelect";

interface Props {
  form: FormikProps<FormikValues>;
  name: string;
}

const BrandSelect = ({ form, name }: Props) => {
  const { data } = useFetch<
    Array<{ description: string; id: string; text: string }>
  >({
    to: "LAFISE",
    urlPath: EnumUrlCatalogsPaths.models
      .replace("{planId}", "477")
      .replace("{brandId}", "1296"),
  });

  const { isValid, value, errorMessages } = useFormProps({ form, name });

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
          <option value={i.id} key={i.id}>
            {i.text}
          </option>
        ))}
      </FormSelect>

      <Feedback type="invalid" tooltip>
        {errorMessages}
      </Feedback>
    </FormGroup>
  );
};

export default BrandSelect;
