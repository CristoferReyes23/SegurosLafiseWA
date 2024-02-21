import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
// import { fetchCall } from "@/shared/utils/fetchApi";
// import { getUrlWithValues } from "@/shared/utils/getUrlWithValues";
// import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

export class QuoteApi {
  static async createQuote(params: any): Promise<QuoteResponseModel> {
    console.log(params);

    // await fetchCall({
    //   method: "POST",
    //   path: getUrlWithValues(EnumUrlCatalogsPaths.coverages, params),
    //   use: "LAFISE",
    //   body: params,
    // });

    return new Promise((res) => {
      setTimeout(() => {
        res({
          sumaAsegurada: 0,
          prima: 0,
          descuento: 0,
          impuestos: 0,
          total: 0,
          coberturas: [
            {
              nombre: "string",
              orden: 0,
              id: 0,
              coberturaId: 0,
              prima: 0,
              sumaAsegurada: 0,
              coaseguro: 0,
              deducible: 0,
              descuento: 0,
              total: 0,
            },
            {
              nombre: "string",
              orden: 0,
              id: 2,
              coberturaId: 0,
              prima: 0,
              sumaAsegurada: 0,
              coaseguro: 0,
              deducible: 0,
              descuento: 0,
              total: 0,
            },
          ],
          primaMensual: 0,
          primaTrimestral: 0,
          primaSemestral: 0,
        });
      }, 2000);
    });
  }
}
