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

const ModelSelect = ({ form }: FormikComponentProps) => {
  const { data, isDisabled } = useLoadSelect<Brand[]>({
    dependencyField: "marcaId",
    form,
    name: "modeloId",
    pathApi: EnumUrlCatalogsPaths.models,
    use: "LAFISE",
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

export default ModelSelect;
