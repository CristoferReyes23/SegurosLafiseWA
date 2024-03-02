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
  <div className="mb-1" style={{ flex: "1 1 25%", width: "100%" }}>
    <p className="mb-0 key-label ">
      <span className="fw-bold text-blue d-inline me-3">{title}: </span>
      <span>{value}</span>
    </p>
  </div>
);
