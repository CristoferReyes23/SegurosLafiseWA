import { FormikComponentProps, getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import { PlanModel } from "@/shared/models/plan.model";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import useFetch from "@/shared/hooks/useFetch";
import { SelectDataTemplate } from "@/shared/utils/formTypes";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";

export const PlanSelect = ({ form }: FormikComponentProps) => {
  const { data } = useFetch<PlanModel[]>({
    to: "LAFISE",
    urlPath: EnumUrlCatalogsPaths.plans,
  });

  const dataView: SelectDataTemplate[] =
    data
      ?.map((i) => ({
        text: i.nombre,
        id: i.id,
      }))
      .filter((item, index, self) => index === self.findIndex((t) => t.id === item.id)) ?? []; //avoid duplicated

  const inputFormik = getFormikProps(form, "planId");

  const onChangeSelect = (value: any) => {
    form.setFieldValue("moneda", data?.find((i) => i.id == value)?.moneda);
    form.setFieldValue("topAnio", data?.find((i) => i.id == value)?.topAnio);

    form.setFieldValue("xplan", dataView?.find((i) => i.id == value)?.text);
  };

  return (
    <FormGroupTemplate label="Plan de póliza" name="planId">
      <FormSelectTemplate
        firstOptionEmpty="Seleccione un plan de poliza"
        data={dataView}
        {...inputFormik}
        onChange={(e) => {
          onChangeSelect(e.target.value);
          inputFormik.onChange(e);
        }}
        errorMessage={getFormikErrorField(form, "planId")}
      />
    </FormGroupTemplate>
  );
};
