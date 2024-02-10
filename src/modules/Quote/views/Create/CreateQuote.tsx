import FormCard from "@/shared/components/FormCard";
import FormSelectApi from "@/modules/Quote/components/FormSelectApi";
import Col from "react-bootstrap/esm/Col";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";

const CreateQuote = () => {
  return (
    <div>
      <FormCard title={"Obtener planes"}>
        <Row>
          <Col>
            <FloatingLabel controlId="floatingSelect" label="Planes">
              <FormSelectApi
                size="sm"
                style={{ paddingLeft: ".75rem" }}
                to="LAFISE"
                urlPath="catalogs/plans"
              />
            </FloatingLabel>
          </Col>

          <Col>
            <Form.Control className="h-100" placeholder="Moneda" disabled />
          </Col>

          <Col>
            <Form.Control className="h-100" placeholder="Top Año" disabled />
          </Col>
        </Row>
      </FormCard>
    </div>
  );
};

export default CreateQuote;
