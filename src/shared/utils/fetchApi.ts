import { AuthSessionService } from "@/shared/services/AuthSession.service";
import { TypeProviderApi } from "@/shared/utils/urlPaths";

interface Props {
  providerName: TypeProviderApi;
  path: string;

  method?: "POST" | "GET";
  body?: any;
  headers?: any;
}

export async function fetchCall<T>(params: Props): Promise<T> {
  const session = AuthSessionService.getSession();

  let domain = "";
  let token = "";
  if (params.providerName === "LAFISE") {
    domain = import.meta.env.VITE_API_LAFISE_SERVICE;
    token = session!.tokenLafise;
  } else {
    // come from airbak
  }

  const url = domain + params.path;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
}
