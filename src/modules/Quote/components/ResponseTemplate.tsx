import SummaryTemplate from "@/modules/Quote/components/SummaryTemplate";
import TableResponse from "@/modules/Quote/components/TableResponse";
import FormCard from "@/shared/components/FormCard";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";

interface Props {
  response: QuoteResponseModel;
}

const ResponseTemplate = ({ response }: Props) => {
  return (
    <div className="mt-3">
      <FormCard title={"Resultado cotización"}>
        <p className="fw-semibold bg-primary p-2 text-white">Coberturas</p>
        <TableResponse coverages={response.coberturas} />

        <div className="row">
          <SummaryTemplate title="Descuento" value={response.descuento} />
          <SummaryTemplate title="Impuestos" value={response.impuestos} />
          <SummaryTemplate title="Suma Aseguradora" value={response.sumaAsegurada} />
          <SummaryTemplate title="Prima" value={response.prima} />
          <SummaryTemplate title="Prima Mensual" value={response.primaMensual} />
          <SummaryTemplate title="Prima Trimestral" value={response.primaTrimestral} />
          <SummaryTemplate title="Prima Semestral" value={response.primaSemestral} />
          <SummaryTemplate title="Total" value={response.total} />
        </div>
      </FormCard>
    </div>
  );
};

export default ResponseTemplate;
