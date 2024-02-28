import { AuthSessionService } from "@/shared/services/authSession.service";
import { TypeProviderApi } from "@/shared/utils/urlPaths";

interface Props extends RequestInit {
  providerName: TypeProviderApi;
  path: string;
  method?: "POST" | "GET";
}

export async function fetchCall<T>({ providerName, path, method, headers, ...extraProps }: Props): Promise<T> {
  let domain = "";
  let token = "";
  let headersComplement = {};

  if (providerName === "LAFISE") {
    const tokenLafise = AuthSessionService.getLafiseToken();
    domain = import.meta.env.VITE_API_LAFISE_SERVICE;
    token = tokenLafise!;

    headersComplement = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  } else {
    // come from airbak
  }

  const url = domain + path;
  const response = await fetch(url, {
    method: method ?? "GET",
    headers: {
      ...headers,
      ...headersComplement,
    },
    ...extraProps,
  });
  return await response.json();
}
