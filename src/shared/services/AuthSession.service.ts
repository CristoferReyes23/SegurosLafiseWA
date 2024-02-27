import { ValidateSessionResponse } from "@/shared/models/validateSessionResponse.model";

export class AuthSessionService {
  static saveSessionLaFise(token: string) {
    sessionStorage.setItem("lafiseToken", token);
  }
  static getLafiseToken() {
    return sessionStorage.getItem("lafiseToken");
  }

  static saveSession(user: ValidateSessionResponse) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  static getAuthSession(): ValidateSessionResponse | null {
    const data = sessionStorage.getItem("user");
    if (!data) return null;
    return JSON.parse(data);
  }

  static clearSession() {
    sessionStorage.clear();
  }
}
