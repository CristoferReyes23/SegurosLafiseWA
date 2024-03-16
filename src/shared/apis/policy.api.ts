import { PolicyListResponseModel } from "@/shared/models/policyListResponse.model";
import { CreatePolicyRequestModel } from "@/shared/models/request/CreatePolicyRequest.model";
import { CustomException } from "@/shared/utils/customException.model";
import { fetchCall } from "@/shared/utils/fetchApi";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

export class PolicyApi {
  static async getPdf(policyId: number): Promise<Blob> {
    const response = await fetchCall({
      path: EnumUrlCatalogsPaths.getPdfPolicy + policyId,
      providerName: "LAFISE",
    });

    return response.blob();
  }

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
              id: 1462925,
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

  static async createPolicy(body: CreatePolicyRequestModel): Promise<number> {
    const response = await fetchCall({
      method: "POST",
      path: EnumUrlCatalogsPaths.createPolicy,
      providerName: "LAFISE",
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();
      return Number(data.id);
    }

    const data = await response.text();
    throw new CustomException(data, "BAD_REQUEST");
  }

  static async confirmPolicy(policyId: Number): Promise<boolean> {
    const response = await fetchCall({
      method: "POST",
      path: EnumUrlCatalogsPaths.confirmPolicy + policyId,
      providerName: "LAFISE",
    });

    if (response.ok) return true;

    const messageResponse = await response.text();
    throw new CustomException(messageResponse, "BAD_REQUEST");
  }
}
