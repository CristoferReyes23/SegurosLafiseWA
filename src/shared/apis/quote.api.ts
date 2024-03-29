import { DataSheetResponse } from "@/shared/models/dataSheetResponse.model";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { CustomException } from "@/shared/utils/customException.model";
import { fetchCall } from "@/shared/utils/fetchApi";
import { getUrlWithValues } from "@/shared/utils/getUrlWithValues";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

export class QuoteApi {
  static async getCoverages(formData: any): Promise<QuoteResponseModel> {
    // return {
    //   coberturas: [
    //     {
    //       coaseguro: 0,
    //       coberturaId: 0,
    //       deducible: 0,
    //       descuento: 0,
    //       id: 0,
    //       nombre: 0,
    //       orden: 0,
    //       prima: 0,
    //       sumaAsegurada: 0,
    //       total: 0,
    //     },
    //   ],
    //   descuento: 0,
    //   impuestos: 0,
    //   prima: 0,
    //   primaMensual: 0,
    //   primaSemestral: 0,
    //   primaTrimestral: 0,
    //   sumaAsegurada: 0,
    //   total: 0,
    // };

    const path = getUrlWithValues(formData, EnumUrlCatalogsPaths.coverages);
    const body = JSON.stringify({
      valn: "0",
      anio: formData["anio"],
      usoo: formData["usoo"],
      cate: formData["cate"].toString(),
      nasiento: formData["nasiento"].toString(),
    });

    const resp = await fetchCall({ path, body, method: "POST", providerName: "LAFISE" });

    if (!resp.ok) {
      const text = await resp.text();
      throw new CustomException(text, "BAD_REQUEST");
    }
    return await resp.json();
  }

  static async fetchDataSheet(formData: any): Promise<DataSheetResponse> {
    const path = getUrlWithValues(formData, EnumUrlCatalogsPaths.dataSheet);

    const resp = await fetchCall({ path, providerName: "LAFISE" });
    return await resp.json();
  }
}
