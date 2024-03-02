import { CommonSelectWithDependency } from "@/modules/Policy/components/CommonSelectWithDependency";
import FormCard from "@/shared/components/FormCard";
import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import { FormikProps, FormikValues } from "formik";
import CommonSelectGroup from "@/modules/Policy/components/CommonSelectGroup";
import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import FormCheck from "react-bootstrap/esm/FormCheck";
import { FormikComponentProps } from "@/shared/utils/getFormikProps";
import { ConstRegex } from "@/shared/utils/constRegex";
import { useMemo } from "react";

interface Props {
  form: FormikProps<FormikValues>;
}

const ClientForm = ({ form }: Props) => {
  return (
    <div className="client-step vstack gap-3">
      <FormCard title="Datos del cliente">
        <div className="form-fields-container">
          <CommonSelectGroup
            form={form}
            name={"tipoId"}
            urlPath={EnumUrlCatalogsPaths.typeId}
            label={"Tipo de identificación"}
            firsOption={"Seleccione un tipo de identificación"}
          />

          <GroupInputForm formik={form} label="Identificación" name="documentoIdentificacion" />
          <GenderCheckBox form={form} />
          <GroupInputForm formik={form} label="Nombre" name="nombre" />
          <GroupInputForm formik={form} label="Apellido" name="apellido" />

          <BirthdayInput form={form} />

          <CommonSelectGroup
            form={form}
            firsOption="Seleccione una profesión"
            label="Profesiones"
            name="profesion"
            urlPath={EnumUrlCatalogsPaths.profession}
          />
        </div>
      </FormCard>
      <FormCard title="Datos de contacto">
        <div className="form-fields-container">
          <GroupInputForm formik={form} label="Correo" name="email" type="email" />
          <GroupInputForm
            name={"celular"}
            formik={form}
            label={"Celular"}
            maxLength={8}
            minLength={8}
            regexValidation={ConstRegex.onlyNumberDigit}
          />
          <GroupInputForm
            name={"telefono"}
            formik={form}
            label={"Teléfono"}
            maxLength={8}
            minLength={8}
            regexValidation={ConstRegex.onlyNumberDigit}
          />
        </div>
      </FormCard>

      <FormCard title="Dirección">
        <div className="form-fields-container">
          <div className="dir-input">
            <GroupInputForm formik={form} name={"direccion"} label={"Dirección"} />
          </div>
          <CommonSelectGroup
            form={form}
            name="paisOrigen"
            nameText="xpaisOrigen"
            urlPath={EnumUrlCatalogsPaths.countriesOrigin}
            label="País de origen"
            firsOption="Seleccione un país"
          />
          <CommonSelectWithDependency
            dependencyField="paisOrigen"
            floatingLabel="Departamento"
            form={form}
            name="provincia"
            nameText="xprovincia"
            pathApi={EnumUrlCatalogsPaths.department}
            firstOptionEmpty="Seleccione un departamento"
          />
          <CommonSelectWithDependency
            dependencyField="provincia"
            floatingLabel="Ciudad"
            form={form}
            name="canton"
            nameText="xcanton"
            pathApi={EnumUrlCatalogsPaths.cities}
            firstOptionEmpty="Seleccione una ciudad"
          />
          <CommonSelectWithDependency
            dependencyField="canton"
            floatingLabel="Distrito"
            form={form}
            name="distrito"
            nameText="xdistrito"
            pathApi={EnumUrlCatalogsPaths.districts}
            firstOptionEmpty="Seleccione un distrito"
          />
        </div>
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
          name="sexo"
          onChange={form.handleChange}
          label={`Masculino`}
          className="form-check-inline"
        />
        <FormCheck
          type="radio"
          id={"F"}
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
