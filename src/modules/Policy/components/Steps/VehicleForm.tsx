import GroupInputForm from "@/shared/components/Forms/GroupInputForm";
import FormCard from "@/shared/components/FormCard";
import { FormikProps, FormikValues } from "formik/dist/types";
import Stack from "react-bootstrap/esm/Stack";

interface Props {
  form: FormikProps<FormikValues>;
}

const VehicleForm = ({ form }: Props) => {
  return (
    <div>
      <Stack gap={3}>
        <FormCard title="Datos del vehículo">
          <div className="form-fields-container">
            <GroupInputForm formik={form} label="Número de placa" name="placa" />
            <GroupInputForm formik={form} label="Número de motor" name="motor" />
            <GroupInputForm formik={form} label="Número de chasis" name="chasis" />
            <GroupInputForm formik={form} label="Color" name="color" />
            <GroupInputForm
              disabled={true}
              formik={form}
              label="Número de puertas"
              name="puertas"
              type="text"
              maxLength={2}
            />
          </div>
        </FormCard>
      </Stack>
    </div>
  );
};

export default VehicleForm;
