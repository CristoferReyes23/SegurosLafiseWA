import { AuthSessionUtil } from "@/shared/utils/authSession.util";
import { EnumUrlCatalogsPaths, TypeProviderApi } from "@/shared/utils/urlPaths";

interface Props extends RequestInit {
  providerName: TypeProviderApi;
  path: string;
  method?: "POST" | "GET";
}

export async function fetchCall({ providerName, path, method, headers, ...extraProps }: Props) {
  let domain = "";
  let headersComplement: { [key: string]: string } = {};
  let complement: any = null;

  switch (providerName) {
    case "LAFISE":
      domain = import.meta.env.VITE_API_LAFISE_SERVICE;
      lafiseComplement(headersComplement);
      break;

    case "AIRPAK":
      domain = import.meta.env.VITE_API_AIRPAK;
      if (path == EnumUrlCatalogsPaths.airpakQuery) {
        complement = airPakComplement(extraProps.body, headersComplement);
        extraProps.body = JSON.stringify(complement);
      }
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

function lafiseComplement(headersComplement: any) {
  const tokenLafise = AuthSessionUtil.getLafiseToken();
  if (tokenLafise) headersComplement["Authorization"] = `Bearer ${tokenLafise}`;
}

function airPakComplement(body: any, headersComplement: any) {
  const sessionData = AuthSessionUtil.getAuthSession();
  if (!sessionData) return body;

  headersComplement["Authorization"] = `Bearer ${sessionData.token}`;

  return {
    usuario: sessionData.sesionUsuario.id,
    codigoServicio: 439,
    codigoServicioReferencia: "131760439",
    puntoServicio: sessionData.datosToken.service_point_,
    region: sessionData.sesionUsuario.regionID,
    subAgente: sessionData.sesionUsuario.subAgentID,
    type: "",
    filtros: [
      {
        nombre: "metadata",
        valor: body,
      },
    ],
    fieldsPE: [],
  };
}
