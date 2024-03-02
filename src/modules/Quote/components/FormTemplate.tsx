import { PlanSelect } from "@/modules/Policy/components/PlanSelect";
import { FormikComponentProps, getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import FormCard from "@/shared/components/FormCard";
import CommonSelectApi from "@/shared/components/Forms/CommonSelectApi";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import useFetch from "@/shared/hooks/useFetch";
import { BaseListDataModel } from "@/shared/models/baseListData.model";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { testData } from "@/shared/utils/test";

interface Props extends FormikComponentProps {
  children?: any;
}

const FormTemplate = ({ form, children }: Props) => {
  return (
    <form noValidate onSubmit={form.handleSubmit}>
      <FormCard title={"Plan a cotizar"}>
        <div className="row">
          <div className="col-sm-12 col-md-4 mb-3">
            <PlanSelect form={form} />
          </div>

          <div className="col-sm-12 col-md-4 mb-3">
            <SelectUses form={form} />
          </div>

          <div className="col-sm-12 col-md-4 mb-3">
            <FloatingLabel label="Marca">
              <CommonSelectApi
                dependencyField="planId"
                name="marcaId"
                form={form}
                pathApi={EnumUrlCatalogsPaths.brands}
                firstOptionEmpty="Seleccione una marca"
              />
            </FloatingLabel>
          </div>

          <div className="col-sm-12 col-md-4 mb-3">
            <FloatingLabel label="Modelo">
              <CommonSelectApi
                dependencyField="marcaId"
                name="modeloId"
                form={form}
                pathApi={EnumUrlCatalogsPaths.models}
                firstOptionEmpty="Seleccione un modelo"
              />
            </FloatingLabel>
          </div>

          <div className="col-sm-12 col-md-4 mb-3">
            <FloatingLabel label="Año">
              <CommonSelectApi
                dependencyField="modeloId"
                name="anio"
                form={form}
                pathApi={EnumUrlCatalogsPaths.years}
                firstOptionEmpty="Selccione el año"
              />
            </FloatingLabel>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit" disabled={form.isSubmitting}>
            {form.isSubmitting && (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            )}
            Cotizar
          </button>
        </div>

        {/* renderiza los componentes hijos  */}
        {children}
      </FormCard>
    </form>
  );
};

export default FormTemplate;

const SelectUses = ({ form }: FormikComponentProps) => {
  const { data } = useFetch<BaseListDataModel[]>({ to: "LAFISE", urlPath: EnumUrlCatalogsPaths.uses });

  const dataView: BaseListDataModel[] =
    data
      ?.map((i) => ({
        text: i.text,
        id: i.id.toString(),
      }))
      .filter((item, index, self) => index === self.findIndex((t) => t.id === item.id)) ?? testData; //avoid

  return (
    <FloatingLabel label="Uso del vehículo">
      <FormSelectTemplate
        {...getFormikProps(form, "usoo")}
        data={dataView}
        errorMessage={getFormikErrorField(form, "usoo")}
        firstOptionEmpty="Seleccione el uso del vehículo"
      />
    </FloatingLabel>
  );
};
