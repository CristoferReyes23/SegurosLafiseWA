import { AuthApi } from "@/apis/auth.api";
import { useAuthDispatchContext } from "@/contexts/authContext/auth.context";
import { AuthSessionService } from "@/services/AuthSession.service";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useAuthentication = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [searchParams] = useSearchParams();
  const dispatch = useAuthDispatchContext();

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

        if (isAuthenticated) {
          dispatch({
            type: "login",
            payload: { tokenBackend: "", tokenLafise: "" },
          });
        }

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
