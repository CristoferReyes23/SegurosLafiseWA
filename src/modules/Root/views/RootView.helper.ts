import { RootService } from "@/shared/services/root.service";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const RootViewHelper = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [searchParams] = useSearchParams();
  const loadingRef = useRef<any>(null);

  useEffect(() => {
    loadingRef.current?.show(true);
    const a = searchParams.get("a");
    const b = searchParams.get("b");

    // validate if search params come in the url
    if (!a || !b) {
      setIsFetching(false);
      setIsLogged(false);
      return;
    }

    RootService.authenticate(a, b)
      .then((res) => {
        setIsLogged(res.isLogged);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loadingRef.current?.show(false);
        setIsFetching(false);
      });
  }, []);

  return {
    isFetching,
    loadingRef,
    isLogged,
  };
};
