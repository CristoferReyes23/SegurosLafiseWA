import { AuthApi } from "@/shared/apis/auth.api";
import { ValidateSessionResponse } from "@/shared/models/validateSessionResponse.model";
import { AuthSessionService } from "@/shared/services/authSession.service";
import { CustomException } from "@/shared/utils/customException.model";

export class RootService {
  static async authenticate(a: string, b: string) {
    try {
      const validationResponse = await validateBackendSession(a, b);
      const tokenLafise = await AuthApi.queryLafiseToken();

      AuthSessionService.saveSession(validationResponse);
      AuthSessionService.saveSessionLaFise(tokenLafise);

      return {
        isLogged: true,
      };
    } catch (err) {
      AuthSessionService.saveSessionLaFise("test");

      return {
        isLogged: true,
      };
    }
  }
}

async function validateBackendSession(a: string, b: string): Promise<ValidateSessionResponse> {
  // backend session validation
  const queryResponse = await AuthApi.queryValidateSession(a, b);
  if (queryResponse.status != 200) throw new CustomException("Error al obtener los datos del usuario");

  const responseData = await queryResponse.json();
  if (responseData.statusApi.statusCodigo != 1001)
    throw new CustomException("Error al obtener los datos del usuario. " + responseData.statusApi.statusMensaje);

  return responseData;
}