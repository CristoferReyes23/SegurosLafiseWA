import { PolicyListResponseModel } from "@/shared/models/policyListResponse.model";
import { CreatePolicyRequestModel } from "@/shared/models/request/CreatePolicyRequest.model";
import { EnumPolicyActions, EnumQueryTypeValues } from "@/shared/utils/constValues";
import { CustomException } from "@/shared/utils/customException.model";
import { fetchCall } from "@/shared/utils/fetchApi";
import { MESSAGES } from "@/shared/utils/formMessages";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

export class PolicyApi {
  static async getPdf(policyId: number): Promise<Blob> {
    const response = await fetchCall({
      path: EnumUrlCatalogsPaths.getPdfPolicy + policyId,
      providerName: "LAFISE",
    });

    return response.blob();
  }

  static async getPoliciesByClientId(_clientId: string): Promise<PolicyListResponseModel> {
    const body = {
      QueryType: EnumQueryTypeValues.REPRINT,
      ReprintObject: {
        Dni: _clientId,
      },
    };

    try {
      //TODO:
      const resp = await fetchCall({
        providerName: "AIRPAK",
        path: EnumUrlCatalogsPaths.airpakQuery,
        body: JSON.stringify(body),
        method: "POST",
      });
      console.log(resp);

      return {
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
      };
    } catch (err) {
      console.log(err);
      throw new CustomException(MESSAGES.unexpectedError, "BAD_REQUEST");
    }
  }

  static async createPolicyByAirpak(body: CreatePolicyRequestModel): Promise<any> {
    //TODO:
    const bodyComplement = {
      PolicyAction: EnumPolicyActions.CREATE,
      Create: body,
    };

    const response = await fetchCall({
      providerName: "AIRPAK",
      method: "POST",
      path: EnumUrlCatalogsPaths.airpakQuery,
      body: JSON.stringify(bodyComplement),
    });

    console.log(response);
    throw new CustomException("", "BAD_REQUEST");
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
