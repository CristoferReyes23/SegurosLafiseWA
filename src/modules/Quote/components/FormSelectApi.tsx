import { PlanModel } from "@/modules/Quote/models/plan.model";
import useFetch from "@/shared/hooks/useFetch";
import { TypeUrlTo, TypesUrlPath } from "@/shared/utils/urlPaths";
import Form from "react-bootstrap/esm/Form";
import { FormSelectProps } from "react-bootstrap/esm/FormSelect";

interface Props extends FormSelectProps {
  urlPath: TypesUrlPath;
  to: TypeUrlTo;
}

const FormSelectApi = ({ to, urlPath, ...selectParams }: Props) => {
  const { data } = useFetch<PlanModel[]>({ to, urlPath });

  return (
    <Form.Select {...selectParams}>
      <option>Seleccione una opción</option>
      {data?.map((i) => (
        <option key={i.id} value={i.id}>
          {i.nombre}
        </option>
      ))}
    </Form.Select>
  );
};

export default FormSelectApi;
