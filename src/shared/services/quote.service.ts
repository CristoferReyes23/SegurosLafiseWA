import { QuoteApi } from "@/shared/apis/quote.api";
import { QuoteResponseModel } from "@/shared/models/quoteResponse.model";
import { CustomException } from "@/shared/utils/customException.model";

export class QuoteService {
  static async queryCoverages(formData: any): Promise<QuoteResponseModel> {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          coberturas: [
            {
              coaseguro: 0,
              coberturaId: 0,
              deducible: 0,
              descuento: 0,
              id: 0,
              nombre: 0,
              orden: 0,
              prima: 0,
              sumaAsegurada: 0,
              total: 0,
            },
          ],
          descuento: 0,
          impuestos: 0,
          prima: 0,
          primaMensual: 0,
          primaSemestral: 0,
          primaTrimestral: 0,
          sumaAsegurada: 0,
          total: 0,
        });
      }, 2000);
    });

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
