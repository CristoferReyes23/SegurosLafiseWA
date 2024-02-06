import { AuthSessionModel } from "../models/AuthSession.model";

export class AuthSessionService {
  static saveSession(user: AuthSessionModel) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  static getSession(): AuthSessionModel | null {
    const data = sessionStorage.getItem("user");
    if (!data) return null;
    return JSON.parse(data);
  }

  static clearSession() {
    sessionStorage.clear();
  }
}
