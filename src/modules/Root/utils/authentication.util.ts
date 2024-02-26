import { AuthApi } from "@/shared/apis/auth.api";
import { AuthSessionService } from "@/shared/services/authSession.service";

export async function authenticate(a: string, b: string) {
  const response = await AuthApi.ValidateQueryParams(a, b);
  const isAuthenticated = response.isValid;

  if (isAuthenticated) {
    AuthSessionService.saveSession({
      isLogged: isAuthenticated,
      tokenBackend: "",
      tokenLafise: "",
      userName: "",
    });
  }

  return {
    isLogged: isAuthenticated,
  };
}
