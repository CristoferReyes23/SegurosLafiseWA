import { CommonSelectGroup } from "@/modules/Policy/components/CommonSelectGroup";
import FormCard from "@/shared/components/FormCard";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import { FormikProps, FormikValues } from "formik";
import Col from "react-bootstrap/esm/Col";
import FormControl from "react-bootstrap/esm/FormControl";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
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
            <CommonSelectGroup
              form={form}
              name={"tipoId"}
              dependencyField={""}
              pathApi={EnumUrlCatalogsPaths.brands}
              floatingLabel={""}
            />
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
