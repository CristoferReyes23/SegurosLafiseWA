import { PlanSelect } from "@/modules/Policy/components/PlanSelect";
import { FormikComponentProps } from "@/shared/utils/getFormikProps";
import FormCard from "@/shared/components/FormCard";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import CommonSelectGroup from "@/shared/components/Forms/Selects/CommonSelectGroup";
import { CommonSelectWithDependency } from "@/shared/components/Forms/Selects/CommonSelectWithDependency";
import GroupInputForm from "@/shared/components/Forms/GroupInputForm";

interface Props extends FormikComponentProps {
  children?: any;
}

const FormTemplate = ({ form, children }: Props) => {
  return (
    <form noValidate onSubmit={form.handleSubmit}>
      <FormCard title={"Complete el formulario para cotizar"}>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <PlanSelect form={form} />
          </div>

          <div className="col-sm-12 col-md-4">
            <GroupInputForm disabled={true} label="Moneda" name="moneda" formik={form} />
          </div>

          <div className="col-sm-12 col-md-4">
            <CommonSelectGroup
              firsOption="Seleccione el uso del vehículo"
              form={form}
              label="Uso del vehículo"
              name="usoo"
              urlPath={EnumUrlCatalogsPaths.uses}
            />
          </div>

          <div className="col-sm-12 col-md-4">
            <CommonSelectWithDependency
              dependencyField="planId"
              name="marcaId"
              form={form}
              pathApi={EnumUrlCatalogsPaths.brands}
              firstOptionEmpty="Seleccione una marca"
              floatingLabel={"Marca"}
            />
          </div>

          <div className="col-sm-12 col-md-4">
            <CommonSelectWithDependency
              dependencyField="marcaId"
              name="modeloId"
              form={form}
              pathApi={EnumUrlCatalogsPaths.models}
              firstOptionEmpty="Seleccione un modelo"
              floatingLabel={"Modelo"}
            />
          </div>

          <div className="col-sm-12 col-md-4">
            <CommonSelectWithDependency
              dependencyField="modeloId"
              name="anio"
              form={form}
              pathApi={EnumUrlCatalogsPaths.years}
              firstOptionEmpty="Seleccione el año"
              floatingLabel="Año"
            />
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit" disabled={!form.isValid}>
            Cotizar
          </button>
        </div>
        {children}
      </FormCard>
    </form>
  );
};

export default FormTemplate;
