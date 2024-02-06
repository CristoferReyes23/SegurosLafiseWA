import { AuthSessionService } from "@/modules/Authentication/services/AuthSession.service";
import { redirect } from "react-router-dom";

export async function protectedLayoutLoader() {
  const session = AuthSessionService.getSession();
  if (!session || !session.isLogged) return redirect("unauthorized");

  // example validating token session
  const tokenIsValid = await new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, 200);
  });

  if (!tokenIsValid) {
    AuthSessionService.clearSession();
    return redirect("unauthorized");
  }

  return null;
}
