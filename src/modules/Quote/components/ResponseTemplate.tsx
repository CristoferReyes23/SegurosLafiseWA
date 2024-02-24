import SummaryTable from "@/modules/Quote/components/SummaryTable";
import TableResponse from "@/modules/Quote/components/TableResponse";
import { SUMMARY_TABLE_LEFT, SUMMARY_TABLE_RIGHT } from "@/modules/Quote/utils/const";
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
          <div className="col">
            <SummaryTable response={response} dataSource={SUMMARY_TABLE_LEFT} />
          </div>
          <div className="col">
            <SummaryTable response={response} dataSource={SUMMARY_TABLE_RIGHT} />
          </div>
        </div>
      </FormCard>
    </div>
  );
};

export default ResponseTemplate;
