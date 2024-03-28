import { AuthSessionUtil } from "@/shared/utils/authSession.util";
import { redirect } from "react-router-dom";

export function unauthorizedLoader() {
  const sessionData = AuthSessionUtil.getLafiseToken();
  if (!sessionData) return null;

  return redirect("/dashboard");
}
