import { AuthApi } from "@/shared/apis/auth.api";
import { AuthSessionService } from "@/shared/services/AuthSession.service";

export async function authenticate(a: string, b: string) {
  const response = await AuthApi.ValidateQueryParams(a, b);
  const isAuthenticated = response.isValid % 2 == 0;

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
