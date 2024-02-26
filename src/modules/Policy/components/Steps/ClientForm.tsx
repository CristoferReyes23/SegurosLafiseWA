import { CommonSelectWithDependency } from "@/modules/Policy/components/CommonSelectWithDependency";
import FormCard from "@/shared/components/FormCard";
import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";
import { FormikProps, FormikValues } from "formik";
import CommonSelectGroup from "@/modules/Policy/components/CommonSelectGroup";

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
          <CommonSelectGroup
            form={form}
            name={"sexo"}
            urlPath={EnumUrlCatalogsPaths.sex}
            label="Sexo"
            firsOption="Seleccione un sexo"
          />
          <GroupInputForm formik={form} label="Nombre" name="nombre" />
          <GroupInputForm formik={form} label="Apellido" name="apellido" />
          <GroupInputForm type="date" formik={form} label="Fecha de nacimiento" name="fechaNacimiento" />
          <CommonSelectGroup
            form={form}
            firsOption="Seleccione una profesión"
            label="Profesiones"
            name="profesion"
            urlPath={EnumUrlCatalogsPaths.profession}
          />
          <CommonSelectGroup
            form={form}
            label="Ocupación"
            name="profesion"
            firsOption="Seleccione una profesión"
            urlPath={EnumUrlCatalogsPaths.profession}
          />
        </div>
      </FormCard>
      <FormCard title="Datos de contacto">
        <div className="form-fields-container">
          <GroupInputForm formik={form} label="Correo" name="email" type="email" />
          <GroupInputForm name={"celular"} formik={form} label={"Celular"} type="number" maxLength={8} minLength={8} />
          <GroupInputForm
            name={"telefono"}
            formik={form}
            label={"Teléfono"}
            type="number"
            maxLength={8}
            minLength={8}
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
            name="departamentoId"
            nameText="xprovincia"
            pathApi={EnumUrlCatalogsPaths.department}
            firstOptionEmpty="Seleccione un departamento"
          />
          <CommonSelectWithDependency
            dependencyField="departamentoId"
            floatingLabel="Ciudad"
            form={form}
            name="ciudadId"
            nameText="xcanton"
            pathApi={EnumUrlCatalogsPaths.cities}
            firstOptionEmpty="Seleccione una ciudad"
          />
          <CommonSelectWithDependency
            dependencyField="ciudadId"
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
