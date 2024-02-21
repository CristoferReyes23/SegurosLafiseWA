import { CommonSelectGroup } from "@/modules/Policy/components/CommonSelectGroup";
import { PlanSelect } from "@/modules/Policy/components/PlanSelect";
import { getFormikErrorField, getFormikProps } from "@/modules/Policy/utils/getFormikProps";
import { formSchema, initialValue } from "@/modules/Quote/utils/createQuoteFormSchema";
import FormCard from "@/shared/components/FormCard";
import FormControlTemplate from "@/shared/components/Forms/FormControlTemplate";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import { Formik } from "formik";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Row from "react-bootstrap/esm/Row";

interface Props {
  onSubmitForm: (...args: any) => void;
}

const FormTemplate = ({ onSubmitForm }: Props) => {
  return (
    <Formik onSubmit={onSubmitForm} initialValues={initialValue} validationSchema={formSchema}>
      {(form) => (
        <form onSubmit={form.handleSubmit}>
          <FormCard title={"Plan a cotizar"}>
            <Row>
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
            </Row>

            <Row className="mt-3">
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
            </Row>
            <div className="d-flex justify-content-end">
              <Button type="submit" disabled={form.isSubmitting}>
                Cotizar
              </Button>
            </div>
          </FormCard>
        </form>
      )}
    </Formik>
  );
};

export default FormTemplate;
