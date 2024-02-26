import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import FormCard from "@/shared/components/FormCard";
import { FormikProps, FormikValues } from "formik/dist/types";
import Stack from "react-bootstrap/esm/Stack";
import { CommonSelectGroup } from "@/modules/Policy/components/CommonSelectGroup";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

interface Props {
  form: FormikProps<FormikValues>;
}

const VehicleForm = ({ form }: Props) => {
  return (
    <div>
      <Stack gap={3}>
        <FormCard title="Modelo del vehículo">
          <div className="form-fields-container">
            <CommonSelectGroup
              form={form}
              name={"marcaId"}
              dependencyField="planId"
              pathApi={EnumUrlCatalogsPaths.brands}
              floatingLabel={"Marca"}
              firstOptionEmpty="Seleccione una marca"
            />
            <CommonSelectGroup
              form={form}
              name={"modeloId"}
              dependencyField={"marcaId"}
              pathApi={EnumUrlCatalogsPaths.models}
              floatingLabel={"Modelo"}
              firstOptionEmpty="Seleccione un modelo"
            />
            <CommonSelectGroup
              form={form}
              name={"anio"}
              dependencyField={"marcaId"}
              pathApi={EnumUrlCatalogsPaths.years}
              floatingLabel={"Año"}
              firstOptionEmpty="Seleccione una marca"
            />
            <GroupInputForm type="number" formik={form} label="Precio del vehículo nuevo" name="valorNuevo" />
          </div>
        </FormCard>

        <FormCard title="Datos del vehículo">
          <div className="form-fields-container">
            <GroupInputForm formik={form} label="Número de placa" name="placa" />
            <GroupInputForm formik={form} label="Número de motor" name="motor" />
            <GroupInputForm formik={form} label="Número de chasis" name="chasis" />
            <GroupInputForm formik={form} label="Color" name="color" />
            <GroupInputForm formik={form} label="Número de puertas" name="puertas" type="number" />
          </div>
        </FormCard>
      </Stack>
    </div>
  );
};

export default VehicleForm;
