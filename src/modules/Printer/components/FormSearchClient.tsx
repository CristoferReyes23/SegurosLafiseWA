import FormCard from "@/shared/components/FormCard";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import useFetch from "@/shared/hooks/useFetch";
import { BaseListDataModel } from "@/shared/models/BaseListData.model";
import { FormikComponentProps, getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

const FormSearchClient = ({ form }: FormikComponentProps) => {
  return (
    <FormCard title="Buscar cliente">
      <form noValidate onSubmit={form.handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="input-group">
              <label className="input-group-text">Tipo de Identificación</label>
              <SelectTypeId form={form} />
            </div>
          </div>

          <div className="col">
            <div className="input-group">
              <input type="text" placeholder="Identificación" className="form-control" />

              <button className="btn btn-primary" type="submit" disabled={form.isSubmitting}>
                <i className="fa-solid fa-magnifying-glass"></i> Buscar
              </button>
            </div>
          </div>
        </div>
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
    // <div className="form-floating">
    <FormSelectTemplate
      data={
        data ?? [
          { id: "5", text: "Ruc" },
          { id: "1", text: "Cédula" },
          { id: "2", text: "Etc" },
        ]
      }
      {...getFormikProps(form, "typeUserId")}
      errorMessage={getFormikErrorField(form, "typeUserId")}
      firstOptionEmpty="Seleccione un tipo de identificación"
    />
    // <label>Tipo de identificación</label>
    // </div>
  );
};
