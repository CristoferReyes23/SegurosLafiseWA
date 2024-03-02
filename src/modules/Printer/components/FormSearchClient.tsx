import CommonSelectGroup from "@/modules/Policy/components/CommonSelectGroup";
import FormCard from "@/shared/components/FormCard";
import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import { FormikComponentProps } from "@/shared/utils/getFormikProps";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

const FormSearchClient = ({ form }: FormikComponentProps) => {
  return (
    <FormCard title="Buscar cliente">
      <form noValidate onSubmit={form.handleSubmit}>
        <div className="row">
          <div className="col">
            <CommonSelectGroup
              name="typeUserId"
              form={form}
              firsOption="Seleccione un tipo de identificación"
              label="Tipo de identificación"
              urlPath={EnumUrlCatalogsPaths.typeId}
            />
          </div>

          <div className="col">
            <GroupInputForm formik={form} label="Identificación" name="userIdValue" />
          </div>
        </div>

        <div className="row">
          <div className="col-auto d-flex align-items-center">
            <button className="btn btn-primary" type="submit" disabled={form.isSubmitting || !form.isValid}>
              {form.isSubmitting && (
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              )}
              <i className="fa-solid fa-magnifying-glass"></i> Buscar
            </button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default FormSearchClient;
