import { AuthSessionService } from "@/shared/services/authSession.service";
import { TypeProviderApi } from "@/shared/utils/urlPaths";

interface Props extends RequestInit {
  providerName: TypeProviderApi;
  path: string;
  method?: "POST" | "GET";
}

export async function fetchCall({ providerName, path, method, headers, ...extraProps }: Props) {
  let domain = "";
  let headersComplement: { [key: string]: string } = {};

  switch (providerName) {
    case "LAFISE":
      domain = import.meta.env.VITE_API_LAFISE_SERVICE;

      const tokenLafise = AuthSessionService.getLafiseToken();
      if (tokenLafise) headersComplement["Authorization"] = `Bearer ${tokenLafise}`;
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

  return response;
}
