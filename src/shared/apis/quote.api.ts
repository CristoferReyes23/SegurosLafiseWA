import { DataSheetResponse } from "@/shared/models/dataSheetResponse.model";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { fetchCall } from "@/shared/utils/fetchApi";
import { getUrlWithValues } from "@/shared/utils/getUrlWithValues";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

export class QuoteApi {
  static async getCoverages(formData: any): Promise<QuoteResponseModel> {
    const path = getUrlWithValues(formData, EnumUrlCatalogsPaths.coverages);

    const body = JSON.stringify({
      valn: "0",
      anio: "2020",
      usoo: "1",
      cate: "10",
      nasiento: "5",
    });

    return await fetchCall({ path, body, method: "POST", providerName: "LAFISE" });
  }

  static fetchDataSheet(formData: any): Promise<DataSheetResponse> {
    const path = getUrlWithValues(formData, EnumUrlCatalogsPaths.dataSheet);

    return fetchCall<DataSheetResponse>({ path, providerName: "LAFISE" });
  }
}
