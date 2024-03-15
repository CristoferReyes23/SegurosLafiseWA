import { DataSheetResponse } from "@/shared/models/dataSheetResponse.model";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";

export interface QueryCoveragesViewModel {
  coverages: QuoteResponseModel;
  dataSheet: DataSheetResponse;
}
