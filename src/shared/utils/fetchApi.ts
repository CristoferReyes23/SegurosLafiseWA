import { AuthSessionService } from "@/shared/services/AuthSession.service";
import { TypeUrlTo } from "@/shared/utils/urlPaths";

interface Props {
  use: TypeUrlTo;
  path: string;

  method?: "POST" | "GET";
  body?: any;
  headers?: any;
}

export async function fetchCall<T>(params: Props): Promise<T> {
  const session = AuthSessionService.getSession();

  let domain = "";
  let token = "";
  if (params.use === "LAFISE") {
    domain = import.meta.env.VITE_API_LAFISE_SERVICE;
    token = session!.tokenLafise;
  }

  const url = domain + params.path;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
}
