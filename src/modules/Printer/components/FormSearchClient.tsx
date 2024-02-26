import FormCard from "@/shared/components/FormCard";
import FormControlTemplate from "@/shared/components/Forms/FormControlTemplate";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import useFetch from "@/shared/hooks/useFetch";
import { BaseListDataModel } from "@/shared/models/baseListData.model";
import { FormikComponentProps, getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

const FormSearchClient = ({ form }: FormikComponentProps) => {
  return (
    <FormCard title="Buscar cliente">
      <form noValidate onSubmit={form.handleSubmit}>
        <div className="row">
          <div className="col position-relative">
            <div className="input-group has-validation">
              <label className="input-group-text">Tipo de Identificación</label>
              <SelectTypeId form={form} />
            </div>
          </div>

          <div className="col position-relative">
            <div className="input-group has-validation">
              <FormControlTemplate
                errorMessage={getFormikErrorField(form, "userIdValue")}
                placeholder="Identificación"
                {...getFormikProps(form, "userIdValue")}
              />
              <button className="btn btn-primary" type="submit" disabled={form.isSubmitting || !form.isValid}>
                {form.isSubmitting && (
                  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                )}
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
  );
};
