import FormCard from "@/shared/components/FormCard";
import { FormikProps, FormikValues } from "formik";
import Col from "react-bootstrap/esm/Col";
import FormControl from "react-bootstrap/esm/FormControl";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import FormSelect from "react-bootstrap/esm/FormSelect";
import Row from "react-bootstrap/esm/Row";

interface Props {
  form: FormikProps<FormikValues>;
}

const ClientForm = ({ form }: Props) => {
  return (
    <div>
      <FormCard title="Datos del cliente">
        <Row>
          <Col>
            <FormGroup className="mb-3">
              <FormLabel>Tipo de cliente</FormLabel>
              <FormSelect>
                <option>Seleccione una opción</option>
                <option value={2024}>a</option>
                <option value={2023}>b</option>
              </FormSelect>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup className="mb-3">
              <FormLabel>Identificación</FormLabel>
              <FormControl />
            </FormGroup>
          </Col>
        </Row>
      </FormCard>
    </div>
  );
};

export default ClientForm;
