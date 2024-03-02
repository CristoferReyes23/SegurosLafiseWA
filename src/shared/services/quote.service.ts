import { QuoteApi } from "@/shared/apis/quote.api";
import { CustomException } from "@/shared/utils/customException.model";

export class QuoteService {
  static async queryCoverages(formData: any) {
    return QuoteApi.getCoverages({});

    //get category and number of seats
    const dataSheet = await QuoteApi.fetchDataSheet(formData);
    if (!dataSheet.successed) throw new CustomException(dataSheet.message, "DEVELOP");

    const coverages = await QuoteApi.getCoverages({
      ...formData,
      cate: dataSheet.auCategoria,
      nasiento: dataSheet.auNumPasajeros,
    });

    return coverages;
  }
}
