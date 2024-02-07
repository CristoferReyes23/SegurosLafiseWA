import { AuthSessionService } from "@/shared/services/AuthSession.service";
import { redirect } from "react-router-dom";

export async function protectedLayoutLoader() {
  console.log("pasa algo aqui");

  ("protected layout is running");
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
