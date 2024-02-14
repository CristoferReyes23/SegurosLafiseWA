import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import { GroupSelectForm } from "@/shared/components/Forms/GroupSelectForm";
import FormCard from "@/shared/components/FormCard";
import { FormikProps, FormikValues } from "formik/dist/types";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Stack from "react-bootstrap/esm/Stack";
import BrandSelect from "@/modules/Policy/components/BrandSelect";
import ModelSelect from "@/modules/Policy/components/ModelSelect";

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
              <BrandSelect form={form} name={"marcaId"} />
            </Col>

            <Col>
              <ModelSelect form={form} name="modeloId" />
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

            <Col>
              <GroupSelectForm
                dataSource={[
                  { title: "Seleccione", value: "" },
                  { title: "2024", value: "2024" },
                  { title: "2023", value: "2023" },
                ]}
                label={"Año vehículo"}
                form={form}
                name={"anio"}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <GroupInputForm
                type="number"
                form={form}
                label="Precio vehículo nuevo"
                name="valorNuevo"
              />
            </Col>
          </Row>
        </FormCard>
      </Stack>
    </div>
  );
};

export default VehicleForm;
