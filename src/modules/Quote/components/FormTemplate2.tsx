import { CommonSelectGroup } from "@/modules/Policy/components/CommonSelectGroup";
import { PlanSelect } from "@/modules/Policy/components/PlanSelect";
import { FormikComponentProps, getFormikErrorField, getFormikProps } from "@/modules/Policy/utils/getFormikProps";
import FormCard from "@/shared/components/FormCard";
import FormControlTemplate from "@/shared/components/Forms/FormControlTemplate";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

const FormTemplate2 = ({ form }: FormikComponentProps) => {
  return (
    <form noValidate onSubmit={form.handleSubmit}>
      <FormCard title={"Plan a cotizar"}>
        <div className="row">
          <div className="form-fields-container">
            <PlanSelect form={form} />
            <FloatingLabel label="Moneda">
              <FormControlTemplate
                errorMessage={getFormikErrorField(form, "moneda")}
                {...getFormikProps(form, "moneda")}
                disabled
                placeHolder=""
              />
            </FloatingLabel>

            <FloatingLabel label="Valor del vehículo">
              <FormControlTemplate
                errorMessage={getFormikErrorField(form, "valorn")}
                {...getFormikProps(form, "valorn")}
              />
            </FloatingLabel>
          </div>
        </div>

        <div className="row mt-3">
          <div className="form-fields-container">
            <CommonSelectGroup
              floatingLabel="Marca"
              dependencyField="planId"
              name="marcaId"
              form={form}
              pathApi={EnumUrlCatalogsPaths.brands}
              firstOption={{ id: "", text: "Seleccione una marca" }}
            />

            <CommonSelectGroup
              floatingLabel="Modelo"
              dependencyField="marcaId"
              name="modeloId"
              form={form}
              pathApi={EnumUrlCatalogsPaths.models}
              firstOption={{ id: "", text: "Seleccione un modelo" }}
            />

            <CommonSelectGroup
              floatingLabel="Año"
              dependencyField="modeloId"
              name="anio"
              form={form}
              pathApi={EnumUrlCatalogsPaths.years}
              firstOption={{ id: "", text: "Selccione el año" }}
            />
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
      </FormCard>
    </form>
  );
};

export default FormTemplate2;
