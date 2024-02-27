import { AuthSessionService } from "@/shared/services/authSession.service";
import { redirect } from "react-router-dom";

export function unauthorizedLoader() {
  const sessionData = AuthSessionService.getLafiseToken();
  if (!sessionData) return null;

  return redirect("/dashboard");
}
