import { fetchCall } from "@/shared/utils/fetchApi";
import { TypeProviderApi } from "@/shared/utils/urlPaths";
import { useEffect, useState } from "react";

interface Props {
  urlPath: string;
  to: TypeProviderApi;
}

const useFetch = <T>(props: Props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    //test code
    setIsFetching(true);
    setIsFetching(false);

    //TODO:
    // setIsFetching(true);
    // fetchCall({ path: props.urlPath, providerName: "LAFISE" })
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     setData(resp);
    //   })
    //   .catch((_) => {
    //     setErrorMessage("");
    //   })
    //   .finally(() => {
    //     setIsFetching(false);
    //   });
  }, []);

  return {
    isFetching,
    errorMessage,
    data,
  };
};

export default useFetch;
