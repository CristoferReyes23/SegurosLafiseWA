import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import FormCard from "@/shared/components/FormCard";
import { FormikProps, FormikValues } from "formik/dist/types";
import Stack from "react-bootstrap/esm/Stack";
import { CommonSelectWithDependency } from "@/shared/components/Forms/Selects/CommonSelectWithDependency";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import CommonSelectGroup from "@/shared/components/Forms/Selects/CommonSelectGroup";
import { ConstRegex } from "@/shared/utils/constRegex";

interface Props {
  form: FormikProps<FormikValues>;
}

const VehicleForm = ({ form }: Props) => {
  return (
    <div>
      <Stack gap={3}>
        <FormCard title="Modelo del vehículo">
          <div className="form-fields-container">
            <CommonSelectWithDependency
              form={form}
              name={"marcaId"}
              dependencyField="planId"
              nameText="xmarca"
              pathApi={EnumUrlCatalogsPaths.brands}
              floatingLabel={"Marca"}
              firstOptionEmpty="Seleccione una marca"
            />
            <CommonSelectWithDependency
              form={form}
              name={"modeloId"}
              nameText="xmodelo"
              dependencyField={"marcaId"}
              pathApi={EnumUrlCatalogsPaths.models}
              floatingLabel={"Modelo"}
              firstOptionEmpty="Seleccione un modelo"
            />
            <CommonSelectWithDependency
              form={form}
              name={"anio"}
              dependencyField={"modeloId"}
              pathApi={EnumUrlCatalogsPaths.years}
              floatingLabel={"Año"}
              firstOptionEmpty="Seleccione una marca"
            />
            <GroupInputForm
              type="text"
              formik={form}
              label="Precio del vehículo nuevo"
              name="valorNuevo"
              regexValidation={ConstRegex.onlyNumbers}
            />
          </div>
        </FormCard>

        <FormCard title="Datos del vehículo">
          <div className="form-fields-container">
            <CommonSelectGroup
              form={form}
              name="usoo"
              nameText="xusoo"
              urlPath={EnumUrlCatalogsPaths.uses}
              label="Uso del vehículo"
              firsOption="Seleccione un tipo de uso"
            />
            <GroupInputForm formik={form} label="Número de placa" name="placa" />
            <GroupInputForm formik={form} label="Número de motor" name="motor" />
            <GroupInputForm formik={form} label="Número de chasis" name="chasis" />
            <GroupInputForm formik={form} label="Color" name="color" />
            <GroupInputForm
              formik={form}
              label="Número de puertas"
              name="puertas"
              type="text"
              maxLength={2}
              regexValidation={ConstRegex.onlyNumberDigit}
            />
          </div>
        </FormCard>
      </Stack>
    </div>
  );
};

export default VehicleForm;
