import { ValidateSessionResponse } from "@/shared/models/validateSessionResponse.model";

export class AuthSessionService {
  static saveSessionLaFise(token: string) {
    sessionStorage.setItem("lafiseToken", token);
    // save lifetime session token
    saveLifeTimeLafise();
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

  static getLifeTimeLafise() {
    return sessionStorage.getItem("expiredLafiseToken");
  }
}

function saveLifeTimeLafise() {
  const currentDate = new Date();
  const updatedDate = new Date(currentDate.getTime() + (import.meta.env.VITE_LAFISE_EXPIRED - 5));
  sessionStorage.setItem("expiredLafiseToken", updatedDate.getTime().toString());
}
