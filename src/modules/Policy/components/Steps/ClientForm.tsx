import { CommonSelectGroup } from "@/modules/Policy/components/CommonSelectGroup";
import { FormikComponentProps, getFormikErrorField, getFormikProps } from "@/shared/utils/getFormikProps";
import FormCard from "@/shared/components/FormCard";
import FormGroupTemplate from "@/shared/components/Forms/FormGroupTemplate";
import FormSelectTemplate from "@/shared/components/Forms/FormSelectTemplate";
import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import useFetch from "@/shared/hooks/useFetch";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import { FormikProps, FormikValues } from "formik";

interface Props {
  form: FormikProps<FormikValues>;
}

const ClientForm = ({ form }: Props) => {
  return (
    <div className="client-step vstack gap-3">
      <FormCard title="Datos del cliente">
        <div className="form-fields-container">
          <SelectTypeId form={form} />
          <GroupInputForm formik={form} label="Identificación" name="documentoIdentificacion" />
          <SelectGender form={form} />
          <GroupInputForm formik={form} label="Nombre" name="nombre" />
          <GroupInputForm formik={form} label="Apellido" name="apellido" />
          <GroupInputForm type="date" formik={form} label="Fecha de nacimiento" name="fechaNacimiento" />
        </div>
      </FormCard>
      <FormCard title="Datos de contacto">
        <div className="form-fields-container">
          <GroupInputForm formik={form} label="Correo" name="email" type="email" />
          <GroupInputForm name={"celular"} formik={form} label={"Celular"} type="number" />
          <GroupInputForm name={"telefono"} formik={form} label={"Teléfono"} type="number" />
        </div>
      </FormCard>

      <FormCard title="Dirección">
        <div className="form-fields-container">
          <div className="dir-input">
            <GroupInputForm formik={form} name={"direccion"} label={"Dirección"} />
          </div>
          <SelectCountry form={form} />
          <CommonSelectGroup
            dependencyField="paisOrigen"
            floatingLabel="Departamento"
            form={form}
            name="departamentoId"
            pathApi={EnumUrlCatalogsPaths.department}
            firstOptionEmpty="Seleccione un departamento"
          />
          <CommonSelectGroup
            dependencyField="departamentoId"
            floatingLabel="Ciudad"
            form={form}
            name="ciudadId"
            pathApi={EnumUrlCatalogsPaths.cities}
            firstOptionEmpty="Seleccione una ciudad"
          />
          <CommonSelectGroup
            dependencyField="ciudadId"
            floatingLabel="Distrito"
            form={form}
            name="distrito"
            pathApi={EnumUrlCatalogsPaths.districts}
            firstOptionEmpty="Seleccione un distrito"
          />
        </div>
      </FormCard>
    </div>
  );
};

export default ClientForm;

const SelectTypeId = ({ form }: FormikComponentProps) => {
  const { data } = useFetch<any[]>({
    to: "LAFISE",
    urlPath: EnumUrlCatalogsPaths.typeId,
  });

  return (
    <FormGroupTemplate label="Tipo de identificación" name="tipoId">
      <FormSelectTemplate
        firstOptionEmpty="Seleccione un tipo de identificación"
        data={data ?? []}
        errorMessage={getFormikErrorField(form, "tipoId")}
        {...getFormikProps(form, "tipoId")}
      />
    </FormGroupTemplate>
  );
};

const SelectGender = ({ form }: FormikComponentProps) => {
  const { data } = useFetch<any[]>({
    to: "LAFISE",
    urlPath: EnumUrlCatalogsPaths.sex,
  });

  return (
    <FormGroupTemplate label="Sexo" name="sexo">
      <FormSelectTemplate
        firstOptionEmpty="Seleccione un sexo"
        data={data ?? []}
        errorMessage={getFormikErrorField(form, "sexo")}
        {...getFormikProps(form, "sexo")}
      />
    </FormGroupTemplate>
  );
};

const SelectCountry = ({ form }: FormikComponentProps) => {
  const { data } = useFetch<any[]>({
    to: "LAFISE",
    urlPath: EnumUrlCatalogsPaths.countriesOrigin,
  });

  return (
    <FormGroupTemplate label="País de origen" name="paisOrigen">
      <FormSelectTemplate
        firstOptionEmpty="Seleccione un país"
        data={data ?? []}
        errorMessage={getFormikErrorField(form, "paisOrigen")}
        {...getFormikProps(form, "paisOrigen")}
      />
    </FormGroupTemplate>
  );
};
