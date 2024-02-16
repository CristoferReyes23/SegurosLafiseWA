import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import FormCard from "@/shared/components/FormCard";
import { FormikProps, FormikValues } from "formik/dist/types";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
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
          <Row>
            <Col>
              <CommonSelectGroup
                form={form}
                name={"marcaId"}
                dependencyField="planId"
                pathApi={EnumUrlCatalogsPaths.brands}
                floatingLabel={"Marca"}
              />
            </Col>

            <Col>
              <CommonSelectGroup
                form={form}
                name={"modeloId"}
                dependencyField={"marcaId"}
                pathApi={EnumUrlCatalogsPaths.models}
                floatingLabel={"Modelo"}
              />
            </Col>

            <Col>
              <CommonSelectGroup
                form={form}
                name={"anio"}
                dependencyField={"marcaId"}
                pathApi={EnumUrlCatalogsPaths.years}
                floatingLabel={"Año"}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <GroupInputForm
                type="number"
                form={form}
                label="Precio del vehículo nuevo"
                name="valorNuevo"
              />
            </Col>
          </Row>
        </FormCard>

        <FormCard title="Datos del vehículo">
          <Row>
            <Col>
              <GroupInputForm
                form={form}
                label="Número de placa"
                name="placa"
              />
            </Col>
            <Col>
              <GroupInputForm
                form={form}
                label="Número de motor"
                name="motor"
              />
            </Col>
            <Col>
              <GroupInputForm
                form={form}
                label="Número de chasis"
                name="chasis"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <GroupInputForm form={form} label="Color" name="color" />
            </Col>
            <Col>
              <GroupInputForm
                form={form}
                label="Número de puertas"
                name="puertas"
                type="number"
              />
            </Col>
          </Row>
        </FormCard>
      </Stack>
    </div>
  );
};

export default VehicleForm;
