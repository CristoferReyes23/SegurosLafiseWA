import { CustomException } from "@/shared/utils/customException.model";
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
    const url = import.meta.env.VITE_API_LAFISE_SERVICE + EnumUrlCatalogsPaths.lafiseAuth;

    const body = {
      username: import.meta.env.VITE_LAFISE_PASSWORD,
      password: import.meta.env.VITE_LAFISE_USERNAME,
      expiryTime: 120,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status != 200) throw new CustomException("Error al iniciar sesión en lafise", "UNAUTHORIZED");

    return response.text();
  }
}
