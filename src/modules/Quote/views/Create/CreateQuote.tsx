import FormCard from "@/shared/components/FormCard";
import FormSelectApi from "@/modules/Quote/components/FormSelectApi";
import Col from "react-bootstrap/esm/Col";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import CreateQuoteHelper from "@/modules/Quote/views/Create/CreateQuote.helper";
import Button from "react-bootstrap/esm/Button";

const CreateQuote = () => {
  const {
    formik: { handleSubmit, values },
    onSelectPlanId,
  } = CreateQuoteHelper();

  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <FormCard title={"Obtener planes"}>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingSelect" label="Planes">
                <FormSelectApi
                  id="planId"
                  size="sm"
                  to="LAFISE"
                  name="planId"
                  value={values.planId}
                  onChange={onSelectPlanId}
                  urlPath="catalogs/plans"
                  style={{ paddingLeft: ".75rem" }}
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
          <Row className="justify-content-end mt-3">
            <Col xs="auto">
              <Button type="submit">Buscar</Button>
            </Col>
          </Row>
        </FormCard>
      </Form>
    </div>
  );
};

export default CreateQuote;
