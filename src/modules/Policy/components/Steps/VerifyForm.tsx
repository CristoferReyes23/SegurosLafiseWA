import PanelTemplate from "@/modules/Policy/components/PanelTemplate/PanelTemplate";
import { CLIENT_FORM_KEYS_VALUES, VEHICLE_FORM_KEYS_VALUES } from "@/modules/Policy/utils/verifyFormConst";
import FormCard from "@/shared/components/FormCard";
import { FormikComponentProps } from "@/shared/utils/getFormikProps";

const VerifyForm = ({ form }: FormikComponentProps) => {
  return (
    <div>
      <FormCard title="Confirme los datos registrados">
        <PanelTemplate heading="Plan de cotización">
          <ItemValue key="dir" title={"Plan"} value={form.values["planId"]} />
        </PanelTemplate>

        <PanelTemplate heading="Vehículo">
          {VEHICLE_FORM_KEYS_VALUES.map((i) => (
            <ItemValue key={i.key} title={i.title} value={form.values[i.key]} />
          ))}
        </PanelTemplate>

        <PanelTemplate heading="Cliente">
          {CLIENT_FORM_KEYS_VALUES.map((i) => (
            <ItemValue key={i.key} title={i.title} value={form.values[i.key]} />
          ))}
          <ItemValue key="dir" title={"Dirección"} value={form.values["direction"]} />
        </PanelTemplate>
      </FormCard>
    </div>
  );
};

export default VerifyForm;

interface ItemValueProps {
  title: string;
  value: string;
}
const ItemValue = ({ title, value }: ItemValueProps) => (
  <div className="col-sm-6 col-md-3 mb-1">
    <p className="fw-semibold text-blue mb-0">{title}:</p>
    <p className="w-100 text-truncate border-3 border-bottom d-inline-block mb-0">{value ?? "Sin dato"}</p>
  </div>
);
