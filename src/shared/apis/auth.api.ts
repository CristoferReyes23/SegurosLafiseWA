import { EnumQueryTypeValues } from "@/shared/utils/constValues";
import { CustomException } from "@/shared/utils/customException.model";
import { fetchCall } from "@/shared/utils/fetchApi";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths";

export class AuthApi {
  static async queryValidateSession(a: string, b: string) {
    const body = {
      cookie: a,
      session_token: b,
    };

    const response = await fetchCall({
      providerName: "AIRPAK",
      path: EnumUrlCatalogsPaths.airpakValidateSession,
      body: JSON.stringify(body),
      method: "POST",
    });

    return response;
  }

  static async queryLafiseToken(): Promise<string> {
    const body = {
      QueryType: EnumQueryTypeValues.TOKEN,
    };

    try {
      const resp = await fetchCall({
        providerName: "AIRPAK",
        path: EnumUrlCatalogsPaths.airpakQuery,
        method: "POST",
        body: JSON.stringify(body),
      });

      console.log(resp);
      throw new Error("");
    } catch (err) {
      throw new CustomException("Error al iniciar sesión en lafise", "UNAUTHORIZED");
    }
  }
}
