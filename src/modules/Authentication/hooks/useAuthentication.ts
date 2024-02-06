import { AuthApi } from "@/shared/apis/auth.api";
import { AuthSessionService } from "../services/AuthSession.service";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useAuthentication = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const a = searchParams.get("a");
    const b = searchParams.get("b");

    // validate if page has search params
    if (!a || !b) {
      setIsFetching(false);
      setIsLogged(false);
      return;
    }

    validateUser(a, b);
  }, []);

  const validateUser = async (a: string, b: string) => {
    AuthApi.ValidateQueryParams(a!, b!)
      .then((resp) => {
        const isAuthenticated = resp.isValid % 2 == 0;

        if (isAuthenticated)
          AuthSessionService.saveSession({
            isLogged: isAuthenticated,
            tokenBackend: "",
            tokenLafise: "",
            userName: "",
          });
        setIsLogged(isAuthenticated);
      })
      .finally(() => setIsFetching(false));
  };

  return {
    isFetching,
    isLogged,
  };
};
