import { PlanSelect } from "@/modules/Policy/components/PlanSelect";
import { FormikComponentProps } from "@/shared/utils/getFormikProps";
import FormCard from "@/shared/components/FormCard";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { CommonSelectWithDependency } from "@/shared/components/Forms/Selects/CommonSelectWithDependency";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import CommonSelectGroup from "@/shared/components/Forms/Selects/CommonSelectGroup";
import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import { ConstRegex } from "@/shared/utils/constValues";
import { useEffect, useState } from "react";
import AlertTemplate from "@/shared/components/AlertTemplate/AlertTemplate";

interface Props extends FormikComponentProps {
  alertRef: any;
}

const PlanPolicy = ({ form, alertRef }: Props) => {
  return (
    <div>
      <FormCard title="Datos de cotización del vehículo">
        <Row>
          <Col sm={4}>
            <PlanSelect form={form} />
          </Col>

          <Col sm={4}>
            <CommonSelectGroup
              form={form}
              name="usoo"
              nameText="xusoo"
              urlPath={EnumUrlCatalogsPaths.uses}
              label="Uso del vehículo"
              firsOption="Seleccione un tipo de uso"
            />
          </Col>

          <Col sm={4}>
            <VehiclePrice form={form} />
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <CommonSelectWithDependency
              form={form}
              name={"marcaId"}
              dependencyField="planId"
              nameText="xmarca"
              pathApi={EnumUrlCatalogsPaths.brands}
              floatingLabel={"Marca"}
              firstOptionEmpty="Seleccione una marca"
            />
          </Col>
          <Col sm={4}>
            <CommonSelectWithDependency
              form={form}
              name={"modeloId"}
              nameText="xmodelo"
              dependencyField={"marcaId"}
              pathApi={EnumUrlCatalogsPaths.models}
              floatingLabel={"Modelo"}
              firstOptionEmpty="Seleccione un modelo"
            />
          </Col>

          <Col sm={4}>
            <CommonSelectWithDependency
              form={form}
              name={"anio"}
              dependencyField={"modeloId"}
              pathApi={EnumUrlCatalogsPaths.years}
              floatingLabel={"Año"}
              firstOptionEmpty="Seleccione una marca"
            />
          </Col>
        </Row>

        <AlertTemplate childRef={alertRef} />
      </FormCard>

      <FormCard title="Detalle del vehículo" classNames="mt-3">
        <Row>
          <Col sm={4}>
            <GroupInputForm formik={form} label="Número de placa" name="placa" />
          </Col>
          <Col sm={4}>
            <GroupInputForm formik={form} label="Número de motor" name="motor" />
          </Col>
          <Col sm={4}>
            <GroupInputForm formik={form} label="Número de chasis" name="chasis" />
          </Col>
          <Col sm={4}>
            <GroupInputForm formik={form} label="Color" name="color" />
          </Col>
          <Col sm={4}>
            <GroupInputForm
              formik={form}
              label="Número de puertas"
              name="puertas"
              type="number"
              maxLength={2}
              regexValidation={ConstRegex.onlyNumberDigit}
            />
          </Col>
        </Row>
      </FormCard>
    </div>
  );
};

export default PlanPolicy;

export const VehiclePrice = ({ form }: FormikComponentProps) => {
  const [textComplement, setTextComplement] = useState("");

  useEffect(() => {
    const currency = form.values["moneda"];

    if (currency) {
      setTextComplement(" en " + currency);
    } else setTextComplement("");
  }, [form.values["moneda"]]);

  return (
    <GroupInputForm
      type="number"
      formik={form}
      label={`Precio de compra del vehículo ${textComplement}`}
      name="valorNuevo"
      regexValidation={ConstRegex.onlyNumbers}
    />
  );
};
