import { CommonSelectGroup } from "@/modules/Policy/components/CommonSelectGroup";
import { FormikComponentProps, getFormikErrorField, getFormikProps } from "@/modules/Policy/utils/getFormikProps";
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
          <GroupInputForm form={form} label="Identificación" name="documentoIdentificacion" />
          <SelectGender form={form} />
          <GroupInputForm form={form} label="Nombre" name="nombre" />
          <GroupInputForm form={form} label="Apellido" name="apellido" />
          <GroupInputForm type="date" form={form} label="Fecha de nacimiento" name="fechaNacimiento" />
        </div>
      </FormCard>
      <FormCard title="Datos de contacto">
        <div className="form-fields-container">
          <GroupInputForm form={form} label="Correo" name="email" type="email" />
          <GroupInputForm name={"celular"} form={form} label={"Celular"} type="number" />
          <GroupInputForm name={"telefono"} form={form} label={"Teléfono"} type="number" />
        </div>
      </FormCard>

      <FormCard title="Dirección">
        <div className="form-fields-container">
          <div className="dir-input">
            <GroupInputForm form={form} name={"direccion"} label={"Dirección"} as="textarea" rows={2} />
          </div>
          <SelectCountry form={form} />
          <CommonSelectGroup
            dependencyField="paisOrigen"
            floatingLabel="Departamento"
            form={form}
            name="departamentoId"
            pathApi={EnumUrlCatalogsPaths.department}
            firstOption={{ id: "", text: "Seleccione un departamento" }}
          />
          <CommonSelectGroup
            dependencyField="departamentoId"
            floatingLabel="Ciudad"
            form={form}
            name="ciudadId"
            pathApi={EnumUrlCatalogsPaths.cities}
            firstOption={{ id: "", text: "Seleccione una ciudad" }}
          />
          <CommonSelectGroup
            dependencyField="ciudadId"
            floatingLabel="Distrito"
            form={form}
            name="distrito"
            pathApi={EnumUrlCatalogsPaths.districts}
            firstOption={{ id: "", text: "Seleccione un distrito" }}
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
        firstOption={{ id: "", text: "Seleccione un tipo de identificación" }}
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
        firstOption={{ id: "", text: "Seleccione un sexo" }}
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
        firstOption={{ id: "", text: "Seleccione un país" }}
        data={data ?? []}
        errorMessage={getFormikErrorField(form, "paisOrigen")}
        {...getFormikProps(form, "paisOrigen")}
      />
    </FormGroupTemplate>
  );
};
