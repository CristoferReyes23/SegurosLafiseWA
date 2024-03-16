import QuoteTable from "@/modules/Policy/components/QuoteResponseTemplate";
import { CLIENT_FORM_KEYS_VALUES, VEHICLE_FORM_KEYS_VALUES } from "@/modules/Policy/utils/verifyFormConst";
import FormCard from "@/shared/components/FormCard";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { FormikComponentProps } from "@/shared/utils/getFormikProps";

interface Props extends FormikComponentProps {
  coverages: QuoteResponseModel | null;
}

const VerifyForm = ({ form, coverages }: Props) => {
  return (
    <div>
      <FormCard title="Confirme los datos registrados">
        <PanelTemplate heading="Plan de póliza">{coverages && <QuoteTable coverages={coverages} />}</PanelTemplate>

        <PanelTemplate heading="Vehículo">
          <div className="row">
            {VEHICLE_FORM_KEYS_VALUES.map((i) => (
              <ItemValue key={i.key} title={i.title} value={form.values[i.key]} />
            ))}
          </div>
        </PanelTemplate>

        <PanelTemplate heading="Cliente">
          <div className="row">
            {CLIENT_FORM_KEYS_VALUES.map((i) => (
              <ItemValue key={i.key} title={i.title} value={form.values[i.key]} />
            ))}
          </div>
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
  <div className="col-sm-4 mb-sm-1">
    <p className="p-text-container">
      <span className="fw-bold text-blue d-inline me-3">{title}: </span>
      <span>{value}</span>
    </p>
  </div>
);

interface PanelTemplateProps {
  heading: string;
  children: any;
}
const PanelTemplate = ({ children, heading }: PanelTemplateProps) => {
  return (
    <div className="panel mb-3">
      <div className="panel-heading">{heading}</div>
      <div className="panel-body">{children}</div>
    </div>
  );
};
