import { PlanSelect } from "@/modules/Policy/components/PlanSelect";
import {
  FormikComponentProps,
  getFormikProps,
} from "@/modules/Policy/utils/getFormikProps";
import FormCard from "@/shared/components/FormCard";
import { FloatingLabel } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";

const PlanPolicy = ({ form }: FormikComponentProps) => {
  return (
    <div>
      <FormCard title="Planes de póliza a solicitar">
        <Row>
          <Col>
            <PlanSelect form={form} />
          </Col>
          <Col>
            <FloatingLabel label={"Moneda"}>
              <Form.Control
                {...getFormikProps(form, "moneda")}
                disabled
                placeholder=""
              />
            </FloatingLabel>
          </Col>
        </Row>
      </FormCard>
    </div>
  );
};

export default PlanPolicy;
