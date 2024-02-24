import FormCard from "@/shared/components/FormCard";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import useFetch from "@/shared/hooks/useFetch";
import { BaseListDataModel } from "@/shared/models/BaseListData.model";
import { FormikComponentProps, getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

const FormSearchClient = ({ form }: FormikComponentProps) => {
  return (
    <FormCard title={"Seleccione un cliente para listar sus pólizas"}>
      <form noValidate>
        <div className="row">
          <div className="col">
            <SelectTypeId form={form} />
          </div>
        </div>

        <div></div>
      </form>
    </FormCard>
  );
};

export default FormSearchClient;

const SelectTypeId = ({ form }: FormikComponentProps) => {
  const { data } = useFetch<BaseListDataModel[]>({
    to: "LAFISE",
    urlPath: EnumUrlCatalogsPaths.typeId,
  });

  return (
    <FloatingLabel label="Tipo de identificación">
      <FormSelectTemplate
        data={data ?? []}
        {...getFormikProps(form, "typeUserId")}
        errorMessage={getFormikErrorField(form, "typeUserId")}
        firstOptionEmpty="Seleccione un tipo de identificación"
      />
    </FloatingLabel>
  );
};
