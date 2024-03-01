import { DataSheetResponse } from "@/shared/models/dataSheetResponse.model";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { fetchCall } from "@/shared/utils/fetchApi";
import { getUrlWithValues } from "@/shared/utils/getUrlWithValues";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

export class QuoteApi {
  static async getCoverages(formData: any): Promise<QuoteResponseModel> {
    const path = getUrlWithValues(formData, EnumUrlCatalogsPaths.coverages);

    // const body = JSON.stringify({
    //   valn: "0",
    //   anio: formData["anio"],
    //   usoo: formData["usoo"],
    //   cate: String(formData["cate"]),
    //   nasiento: String(formData["nasiento"]),
    // });

    console.log(formData);
    const body = JSON.stringify({
      valn: "0",
      anio: formData["anio"],
      usoo: formData["usoo"],
      cate: formData["cate"].toString(),
      nasiento: formData["nasiento"].toString(),
    });

    console.log(body);

    return await fetchCall({ path, body, method: "POST", providerName: "LAFISE" });
  }

  static fetchDataSheet(formData: any): Promise<DataSheetResponse> {
    const path = getUrlWithValues(formData, EnumUrlCatalogsPaths.dataSheet);

    return fetchCall<DataSheetResponse>({ path, providerName: "LAFISE" });
  }
}
