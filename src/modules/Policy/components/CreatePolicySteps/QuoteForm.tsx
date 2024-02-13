import FormCard from "@/shared/components/FormCard";
import { getInputProps } from "@/shared/utils/formikFields";
import { FormikProps, FormikValues } from "formik";
import { memo, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Row from "react-bootstrap/esm/Row";

interface Props {
  name: string;
  form: FormikProps<FormikValues>;
}

const QuoteForm = memo(({ form }: Props) => {
  useEffect(() => {
    console.log("render again");
  }, []);

  return (
    <div>
      <div className="mb-3">
        <p className="card-title h5">Cotizar</p>
        <p className="small">
          Para emitir una poliza de seguros para vehículos previamente debe
          generar una cotización, si ya ha creado una entonces ingrese el código
          de la cotización en el siguiente campo sino has click en Nueva
          Cotización.
        </p>
      </div>

      <Row className="d-flex justify-content-between">
        <div className="w-auto">
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              placeholder="Codigo de la cotización"
              {...getInputProps("quoteId", form)}
            />
            <Button className="d-flex">
              <div className="mr-2">
                <span className="mdi mdi-tab-search" />
              </div>
              <p className="mb-0 mx-2">Buscar</p>
            </Button>
          </InputGroup>
        </div>
        <div className="w-auto">
          <Button variant="info">Nueva cotización</Button>
        </div>
      </Row>

      <Row>
        <Col>
          <FormCard title="Datos de la cotización">
            <div></div>
          </FormCard>
        </Col>
      </Row>
    </div>
  );
});

export default QuoteForm;
