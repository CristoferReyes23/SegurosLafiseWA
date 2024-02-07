import { authenticate } from "@/modules/Root/utils/authentication.util";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const RootViewHelper = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const a = searchParams.get("a");
    const b = searchParams.get("b");

    // validate if search params come in the url
    if (!a || !b) {
      setIsFetching(false);
      setIsLogged(false);
      return;
    }

    authenticate(a!, b!)
      .then((resp) => {
        setIsLogged(resp.isLogged);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return {
    isFetching,
    isLogged,
  };
};
