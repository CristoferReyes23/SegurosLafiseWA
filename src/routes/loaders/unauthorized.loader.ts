import { AuthSessionService } from "@/modules/Authentication/services/AuthSession.service";
import { redirect } from "react-router-dom";

export function unauthorizedLoader() {
  const sessionData = AuthSessionService.getSession();
  if (!sessionData || !sessionData.isLogged) return null;

  return redirect("/dashboard");
}
