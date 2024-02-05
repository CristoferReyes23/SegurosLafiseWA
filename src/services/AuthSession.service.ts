import { AuthContextModel } from "@/contexts/authContext/auth.model";

export class AuthSessionService {
  static saveSession(user: AuthContextModel) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  static getSession(): AuthContextModel | null {
    const data = sessionStorage.getItem("user");
    if (!data) return null;
    return JSON.parse(data);
  }
}
