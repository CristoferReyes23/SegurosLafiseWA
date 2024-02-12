import FormCard from "@/shared/components/FormCard";
import { getInputProps } from "@/shared/utils/formikFields";
import { FormikProps, FormikValues } from "formik/dist/types";
import Col from "react-bootstrap/esm/Col";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import FormControl from "react-bootstrap/esm/FormControl";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import FormSelect from "react-bootstrap/esm/FormSelect";
import Row from "react-bootstrap/esm/Row";
import Stack from "react-bootstrap/esm/Stack";

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
              <FloatingLabel label="Marca">
                <FormSelect {...getInputProps("brandId", form)}>
                  <option value="">Seleccione</option>
                  <option value="2">Test 1</option>
                  <option value="3">Text 2</option>
                </FormSelect>
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label="Modelo">
                <FormSelect>
                  <option value="">Seleccione</option>
                  <option value="2">Test 1</option>
                  <option value="3">Text 2</option>
                </FormSelect>
              </FloatingLabel>
            </Col>
          </Row>
        </FormCard>

        <FormCard title="Datos del vehículo">
          <Row>
            <Col>
              <FormGroup className="mb-3">
                <FormLabel>Número de placa</FormLabel>
                <FormControl required />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-3">
                <FormLabel>Número de motor</FormLabel>
                <FormControl required />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-3">
                <FormLabel>Número de chasis</FormLabel>
                <FormControl required />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="mb-3">
                <FormLabel>Color</FormLabel>
                <FormControl required />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup className="mb-3">
                <FormLabel>Número de puertas</FormLabel>
                <FormControl
                  required
                  type="numeric"
                  pattern="^[0-9]*[.,]?[0-9]*$"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-3">
                <FormLabel>Año vehículo</FormLabel>
                <FormSelect>
                  <option>Seleccione</option>
                  <option value={2024}>2024</option>
                  <option value={2023}>2023</option>
                </FormSelect>
              </FormGroup>
            </Col>
          </Row>
        </FormCard>
      </Stack>
    </div>
  );
};

export default VehicleForm;
