import { AuthSessionService } from "@/shared/services/authSession.service";
import { redirect } from "react-router-dom";

export async function protectedLayoutLoader() {
  const session = AuthSessionService.getLafiseToken();
  if (!session) return redirect("unauthorized");

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
