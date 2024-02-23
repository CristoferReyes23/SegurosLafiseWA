import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
// import { fetchCall } from "@/shared/utils/fetchApi";
// import { getUrlWithValues } from "@/shared/utils/getUrlWithValues";
// import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

export class QuoteApi {
  static async createQuote(params: any): Promise<QuoteResponseModel> {
    console.log(params);

    return new Promise((res) => {
      setTimeout(() => {
        res({
          sumaAsegurada: 20000,
          prima: 629.13,
          descuento: 195.99,
          impuestos: 56.31,
          total: 489.45,
          coberturas: [
            {
              prima: 31.51,
              sumaAsegurada: 600000,
              coaseguro: 0,
              deducible: 0,
              descuento: 16.97,
              nombre: "Cobertura A",
              orden: 0,
              id: 0,
              coberturaId: 0,
              total: 0,
            },
            {
              prima: 0,
              sumaAsegurada: 175000,
              coaseguro: 0,
              deducible: 0,
              descuento: 0,
              nombre: "Cobertura B",
              orden: 0,
              id: 2,
              coberturaId: 0,
              total: 0,
            },
            {
              prima: 69.16,
              sumaAsegurada: 40000,
              coaseguro: 0,
              deducible: 0,
              descuento: 0,
              nombre: "Cobertura X",
              id: 2,
              coberturaId: 0,
              total: 0,
              orden: 0,
            },
          ],
          primaMensual: 38.66,
          primaTrimestral: 118.04,
          primaSemestral: 238.43,
        });
      }, 2000);
    });
  }
}
