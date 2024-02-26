import { PolicyListResponseModel } from "@/shared/models/policyListResponse.model";

export class PolicyApi {
  static getPoliciesByClientId(_clientId: string): Promise<PolicyListResponseModel> {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          isOk: true,
          clientExist: true,
          data: [
            {
              brand: "Prueba1",
              createdAt: "20-12-99",
              id: "0",
              model: "Prueba2",
              placa: "Prueba3",
              year: "Prueba4",
            },
          ],
        });
      }, 2000);
    });

    // return fetchCall({ path: EnumUrlCatalogsPaths.getPolicies, providerName: "BACKEND" });
  }
}
