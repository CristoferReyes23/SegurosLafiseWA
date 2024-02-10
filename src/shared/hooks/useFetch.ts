import { AuthSessionService } from "@/shared/services/AuthSession.service";
import { TypeUrlTo, TypesUrlPath } from "@/shared/utils/urlPaths";
import { useEffect, useState } from "react";

interface Props {
  urlPath: TypesUrlPath;
  to: TypeUrlTo;
}

const useFetch = <T>(props: Props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetchCall<T>(props)
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err);

        setErrorMessage("");
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return {
    isFetching,
    errorMessage,
    data,
  };
};

export default useFetch;

async function fetchCall<T>(params: Props): Promise<T> {
  const session = AuthSessionService.getSession();

  let domain = "";
  let token = "";
  if (params.to === "LAFISE") {
    domain = import.meta.env.VITE_API_LAFISE_SERVICE;
    token = session!.tokenLafise;
  }

  const url = domain + params.urlPath;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
}
