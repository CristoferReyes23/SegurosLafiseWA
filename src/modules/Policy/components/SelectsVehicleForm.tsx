import { useLoadSelect } from "@/modules/Policy/hooks/useLoadSelect";
import { Brand } from "@/modules/Policy/models/models";
import {
  FormikComponentProps,
  getFormikErrorField,
  getFormikProps,
} from "@/modules/Policy/utils/getFormikProps";
import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

/* ---------------------------------- brand --------------------------------- */

export const BrandSelect = ({ form }: FormikComponentProps) => {
  const { data, isDisabled } = useLoadSelect<Brand[]>({
    form,
    use: "LAFISE",
    name: "marcaId",
    dependencyField: "planId",
    pathApi: EnumUrlCatalogsPaths.brands,
  });

  return (
    <FormGroupTemplate label={"marcaId"} name={"marcaId"}>
      <FormSelectTemplate
        data={data?.map((i) => ({ title: i.text, value: i.id })) ?? []}
        firstOption={{ title: "Seleccione una marca", value: "" }}
        errorMessage={getFormikErrorField(form, "marcaId")}
        {...getFormikProps(form, "marcaId")}
        disabled={isDisabled}
      />
    </FormGroupTemplate>
  );
};

/* ---------------------------------- model --------------------------------- */

export const ModelSelect = ({ form }: FormikComponentProps) => {
  const { data, isDisabled } = useLoadSelect<Brand[]>({
    form,
    use: "LAFISE",
    name: "modeloId",
    dependencyField: "marcaId",
    pathApi: EnumUrlCatalogsPaths.models,
  });

  return (
    <FormGroupTemplate label={"modeloId"} name={"modeloId"}>
      <FormSelectTemplate
        data={data?.map((i) => ({ title: i.text, value: i.id })) ?? []}
        firstOption={{ title: "Seleccione un modelo", value: "" }}
        errorMessage={getFormikErrorField(form, "modeloId")}
        disabled={isDisabled}
        {...getFormikProps(form, "modeloId")}
      />
    </FormGroupTemplate>
  );
};

/* ---------------------------------- year ---------------------------------- */

export const YearSelect = ({ form }: FormikComponentProps) => {
  const { data, isDisabled } = useLoadSelect<Brand[]>({
    form,
    use: "LAFISE",
    name: "anio",
    dependencyField: "modeloId",
    pathApi: EnumUrlCatalogsPaths.years,
  });

  return (
    <FormGroupTemplate label={"Año del vehículo"} name={"anio"}>
      <FormSelectTemplate
        data={data?.map((i) => ({ title: i.text, value: i.id })) ?? []}
        firstOption={{ title: "Seleccione un año", value: "" }}
        errorMessage={getFormikErrorField(form, "modeloId")}
        disabled={isDisabled}
        {...getFormikProps(form, "anio")}
      />
    </FormGroupTemplate>
  );
};
