import { QuoteApi } from "@/shared/apis/quote.api";
import { QueryCoveragesViewModel } from "@/shared/models/viewModels/queryCoveragesViewModel";
import { CustomException } from "@/shared/utils/customException.model";

export class QuoteService {
  static async queryCoverages(formData: any): Promise<QueryCoveragesViewModel> {
    //get category and number of seats
    const dataSheet = await QuoteApi.fetchDataSheet(formData);
    if (!dataSheet.successed) throw new CustomException(dataSheet.message, "DEVELOP");

    const coverages = await QuoteApi.getCoverages({
      ...formData,
      cate: dataSheet.auCategoria,
      nasiento: dataSheet.auNumPasajeros,
    });

    return {
      coverages,
      dataSheet,
    };
  }
}
