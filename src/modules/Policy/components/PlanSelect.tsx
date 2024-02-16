import {
  FormikComponentProps,
  getFormikErrorField,
  getFormikProps,
} from "@/modules/Policy/utils/getFormikProps";
import { PlanModel } from "@/modules/Quote/models/plan.model";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import useFetch from "@/shared/hooks/useFetch";
import { SelectDataTemplate } from "@/shared/utils/formTypes";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

export const PlanSelect = ({ form }: FormikComponentProps) => {
  const { data } = useFetch<PlanModel[]>({
    to: "LAFISE",
    urlPath: EnumUrlCatalogsPaths.plans,
  });

  const dataView: SelectDataTemplate[] =
    data?.map((i) => ({
      text: i.nombre,
      id: i.id.toString(),
    })) ?? [];

  const inputFormik = getFormikProps(form, "planId");
  const errorMessage = getFormikErrorField(form, "planId");

  const onChangeSelect = (value: any) => {
    form.setFieldValue("moneda", data?.find((i) => i.id == value)?.moneda);
    form.setFieldValue("topAnio", data?.find((i) => i.id == value)?.topAnio);
  };

  return (
    <FloatingLabel label={"Plan de póliza"}>
      <FormSelectTemplate
        firstOption={{ text: "Seleccione un plan de poliza", id: "" }}
        data={dataView}
        {...inputFormik}
        onChange={(e) => {
          onChangeSelect(e.target.value);
          inputFormik.onChange(e);
        }}
        errorMessage={errorMessage}
      />
    </FloatingLabel>
  );
};
