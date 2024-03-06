import { CommonSelectWithDependency } from "@/shared/components/Forms/Selects/CommonSelectWithDependency";
import FormCard from "@/shared/components/FormCard";
import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import { FormikProps, FormikValues } from "formik";
import CommonSelectGroup from "@/shared/components/Forms/Selects/CommonSelectGroup";
import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import FormCheck from "react-bootstrap/esm/FormCheck";
import { FormikComponentProps } from "@/shared/utils/getFormikProps";
import { ConstRegex } from "@/shared/utils/constRegex";
import { useMemo } from "react";
import DocumentInputControl from "@/shared/components/Forms/DocumentInputControl";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

interface Props {
  form: FormikProps<FormikValues>;
}

const ClientForm = ({ form }: Props) => {
  return (
    <div className="client-step vstack gap-3">
      <FormCard title="Datos del cliente">
        <Row>
          <Col sm={4}>
            <CommonSelectGroup
              form={form}
              name={"tipoId"}
              urlPath={EnumUrlCatalogsPaths.typeId}
              label={"Tipo de identificación"}
              firsOption={"Seleccione un tipo de identificación"}
            />
          </Col>
          <Col sm={4}>
            <DocumentInputControl
              dependencyName="tipoId"
              label="Identificación"
              name="documentoIdentificacion"
              formik={form}
            />
          </Col>
          <Col sm={4}>
            <GenderCheckBox form={form} />
          </Col>
          <Col sm={4}>
            <GroupInputForm formik={form} label="Nombre" name="nombre" />
          </Col>
          <Col sm={4}>
            <GroupInputForm formik={form} label="Apellido" name="apellido" />
          </Col>
          <Col sm={4}>
            <BirthdayInput form={form} />
          </Col>
          <Col sm={4}>
            <CommonSelectGroup
              form={form}
              firsOption="Seleccione una profesión"
              label="Profesiones"
              name="profesion"
              nameText="xprofesion"
              urlPath={EnumUrlCatalogsPaths.profession}
            />
          </Col>
        </Row>
      </FormCard>
      <FormCard title="Datos de contacto">
        <Row>
          <Col sm={4}>
            <GroupInputForm formik={form} label="Correo" name="email" type="email" />
          </Col>
          <Col sm={4}>
            <GroupInputForm
              name={"celular"}
              formik={form}
              label={"Celular"}
              maxLength={8}
              minLength={8}
              regexValidation={ConstRegex.onlyNumberDigit}
            />
          </Col>
          <Col sm={4}>
            <GroupInputForm
              name={"telefono"}
              formik={form}
              label={"Teléfono"}
              maxLength={8}
              minLength={8}
              regexValidation={ConstRegex.onlyNumberDigit}
            />
          </Col>
        </Row>
      </FormCard>

      <FormCard title="Dirección">
        <Row>
          <Col sm={4}>
            <div className="dir-input">
              <GroupInputForm formik={form} name={"direccion"} label={"Dirección"} />
            </div>
          </Col>
          <Col sm={4}>
            <CommonSelectGroup
              form={form}
              name="paisOrigen"
              nameText="xpaisOrigen"
              urlPath={EnumUrlCatalogsPaths.countriesOrigin}
              label="País de origen"
              firsOption="Seleccione un país"
            />
          </Col>
          <Col sm={4}>
            <CommonSelectWithDependency
              dependencyField="paisOrigen"
              floatingLabel="Departamento"
              form={form}
              name="provincia"
              nameText="xprovincia"
              pathApi={EnumUrlCatalogsPaths.department}
              firstOptionEmpty="Seleccione un departamento"
            />
          </Col>
          <Col sm={4}>
            <CommonSelectWithDependency
              dependencyField="provincia"
              floatingLabel="Ciudad"
              form={form}
              name="canton"
              nameText="xcanton"
              pathApi={EnumUrlCatalogsPaths.cities}
              firstOptionEmpty="Seleccione una ciudad"
            />
          </Col>
          <Col sm={4}>
            <CommonSelectWithDependency
              dependencyField="canton"
              floatingLabel="Distrito"
              form={form}
              name="distrito"
              nameText="xdistrito"
              pathApi={EnumUrlCatalogsPaths.districts}
              firstOptionEmpty="Seleccione un distrito"
            />
          </Col>
        </Row>
      </FormCard>
    </div>
  );
};

export default ClientForm;

const GenderCheckBox = ({ form }: FormikComponentProps) => {
  return (
    <FormGroupTemplate label="Sexo" name="">
      <div className="form-control">
        <FormCheck
          type="radio"
          id={"M"}
          value={"M"}
          name="sexo"
          onChange={form.handleChange}
          label={`Masculino`}
          className="form-check-inline"
        />
        <FormCheck
          type="radio"
          id={"F"}
          value={"F"}
          name="sexo"
          onChange={form.handleChange}
          label={`Femenino`}
          className="form-check-inline"
        />
      </div>
    </FormGroupTemplate>
  );
};

const BirthdayInput = ({ form }: FormikComponentProps) => {
  const minDateString = useMemo(() => {
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - Number(import.meta.env.VITE_BIRTHDAY_MIN));
    return minDate.toISOString().split("T")[0];
  }, []);

  const maxDateString = useMemo(() => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 100);
    return maxDate.toISOString().split("T")[0];
  }, []);

  return (
    <GroupInputForm
      type="date"
      formik={form}
      label="Fecha de nacimiento"
      min={maxDateString}
      max={minDateString}
      name="fechaNacimiento"
    />
  );
};
