import { CustomException } from "@/shared/utils/customException.model";
import { fetchCall } from "@/shared/utils/fetchApi";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

export class AuthApi {
  static async queryValidateSession(a: string, b: string) {
    const url = import.meta.env.VITE_API_VALIDATE_SESSION_URL;

    const body = {
      cookie: a,
      session_token: b,
    };

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }

  static async queryLafiseToken() {
    const path = import.meta.env.VITE_API_LAFISE_SERVICE + EnumUrlCatalogsPaths.lafiseAuth;

    const body = JSON.stringify({
      username: import.meta.env.VITE_LAFISE_USERNAME,
      password: import.meta.env.VITE_LAFISE_PASSWORD,
      expiryTime: import.meta.env.VITE_LAFISE_EXPIRED,
    });

    try {
      return await fetchCall<string>({ path, body, providerName: "LAFISE", method: "POST", responseType: "TEXT" });
    } catch (err) {
      throw new CustomException("Error al iniciar sesión en lafise", "UNAUTHORIZED");
    }
  }
}
