import { AuthApi } from "@/shared/apis/auth.api";
import { ValidateSessionResponse } from "@/shared/models/validateSessionResponse.model";
import { AuthSessionUtil } from "@/shared/utils/authSession.util";
import { CustomException } from "@/shared/utils/customException.model";

export class RootService {
  static async authenticate(_a: string, _b: string) {
    console.log(_a);
    try {
      const tokenLafise = await AuthApi.queryLafiseToken();
      AuthSessionUtil.saveSessionLaFise(tokenLafise);

      // const validationResponse = await validateBackendSession(a, b);
      // AuthSessionUtil.saveSession(validationResponse);

      return {
        isLogged: true,
      };
    } catch (err) {
      AuthSessionUtil.saveSessionLaFise("hello world");

      return {
        isLogged: true,
      };
    }
  }
}

//@ts-expect-error
async function validateBackendSession(a: string, b: string): Promise<ValidateSessionResponse> {
  // backend session validation
  const queryResponse = await AuthApi.queryValidateSession(a, b);
  if (queryResponse.status != 200) throw new CustomException("Error al obtener los datos del usuario");

  const responseData = await queryResponse.json();
  if (responseData.statusApi.statusCodigo != 1001)
    throw new CustomException("Error al obtener los datos del usuario. " + responseData.statusApi.statusMensaje);

  return responseData;
}
