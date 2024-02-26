import { PolicyApi } from "@/shared/apis/policy.api";
import { BaseViewModel } from "@/shared/models/baseView.model";
import { PolicyListResponseModel } from "@/shared/models/policyListResponse.model";

export class PrinterService {
  static async getAllPolicy(clientId: string): Promise<BaseViewModel<PolicyListResponseModel>> {
    try {
      const data = await PolicyApi.getPoliciesByClientId(clientId);
      return {
        isOk: false,
        response: data,
        message: "El cliente no existe",
      };
      // return {
      //   isOk: data.clientExist,
      //   response: data,
      //   message: data.clientExist ? "El cliente no existe" : null,
      // };
    } catch (err) {
      return {
        isOk: false,
        message: "Error al intentar realizar la petición",
      };
    }
  }

  static async getPdfPath(policyId: string): Promise<string> {
    console.log(policyId);

    return "https://web.stanford.edu/class/cs142/lectures/StateManagement.pdf";
  }
}
