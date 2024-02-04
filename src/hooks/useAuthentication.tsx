import { AuthApi } from "@/apis/auth.api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useAuthentication = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log("root layout rendering");
    const a = searchParams.get("a");
    const b = searchParams.get("b");

    if (!a || !b) {
      setIsFetching(false);
      setIsLogged(false);
      return;
    }

    const validateUser = async () => {
      const resp = await AuthApi.ValidateQueryParams(a!, b!);
      setIsLogged(resp.isValid % 2 == 0);
      setIsFetching(false);
    };

    validateUser();
  }, []);

  return {
    isFetching,
    isLogged,
  };
};

export default useAuthentication;
