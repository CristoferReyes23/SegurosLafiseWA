import { AuthSessionService } from "@/shared/services/authSession.service";
import { TypeProviderApi } from "@/shared/utils/urlPaths";

interface Props extends RequestInit {
  providerName: TypeProviderApi;
  path: string;
  method?: "POST" | "GET";
  responseType?: "JSON" | "TEXT" | "BLOB" | "OTHER";
}

export async function fetchCall<T>({
  providerName,
  path,
  method,
  headers,
  responseType = "JSON",
  ...extraProps
}: Props): Promise<T> {
  let domain = "";
  let token = "";
  let headersComplement: { [key: string]: string } = {};

  switch (providerName) {
    case "LAFISE":
      domain = import.meta.env.VITE_API_LAFISE_SERVICE;

      const tokenLafise = AuthSessionService.getLafiseToken();
      if (tokenLafise) headersComplement["Authorization"] = `Bearer ${token}`;
      break;

    case "BACKEND":
      // TODO:
      break;
    default:
      break;
  }

  if (method == "POST") headersComplement["Content-Type"] = "application/json";

  const url = domain + path;
  const response = await fetch(url, {
    method: method ?? "GET",
    headers: {
      ...headers,
      ...headersComplement,
    },
    ...extraProps,
  });

  switch (responseType) {
    case "JSON":
      return await response.json();
    case "TEXT":
      return (await response.text()) as T;
    case "BLOB":
      return (await response.blob()) as T;
    default:
      return response as T;
  }
}
