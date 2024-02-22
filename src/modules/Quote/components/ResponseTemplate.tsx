import TableResponse from "@/modules/Quote/components/TableResponse";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";

interface Props {
  response: QuoteResponseModel;
}

const ResponseTemplate = ({ response }: Props) => {
  return (
    <div className="mt-3">
      <TableResponse coverages={response.coberturas} />
    </div>
  );
};

export default ResponseTemplate;
