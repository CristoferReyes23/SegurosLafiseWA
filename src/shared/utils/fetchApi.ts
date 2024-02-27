import { AuthSessionService } from "@/shared/services/authSession.service";
import { TypeProviderApi } from "@/shared/utils/urlPaths";

interface Props {
  providerName: TypeProviderApi;
  path: string;

  method?: "POST" | "GET";
  body?: any;
  headers?: any;
}

export async function fetchCall<T>(params: Props): Promise<T> {
  let domain = "";
  let token = "";
  if (params.providerName === "LAFISE") {
    const tokenLafise = AuthSessionService.getLafiseToken();
    domain = import.meta.env.VITE_API_LAFISE_SERVICE;
    token = tokenLafise!;
  } else {
    // come from airbak
  }

  const url = domain + params.path;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
}
