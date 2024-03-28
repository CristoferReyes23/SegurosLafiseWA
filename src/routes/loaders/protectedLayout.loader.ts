import { AuthSessionUtil } from "@/shared/utils/authSession.util";
import { redirect } from "react-router-dom";

export async function protectedLayoutLoader() {
  const session = AuthSessionUtil.getLafiseToken();
  if (!session) return redirect("unauthorized");

  // example validating token session
  const tokenIsValid = await new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, 200);
  });

  if (!tokenIsValid) {
    AuthSessionUtil.clearSession();
    return redirect("unauthorized");
  }

  return null;
}
