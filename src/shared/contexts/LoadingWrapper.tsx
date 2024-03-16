import LoadingSpinner from "@/shared/components/LoadingSpinner/LoadingSpinner";
import { createContext, useContext, useMemo, useRef } from "react";

const LoadingContext = createContext<{ show: any; hide: any }>({ hide: () => {}, show: () => {} });

const LoadingWrapper = ({ children }: any) => {
  const loadingRef = useRef<any>();

  const show = () => loadingRef.current?.show(true);
  const hide = () => loadingRef.current?.show(false);
  const valueContext = useMemo(() => ({ show, hide }), [loadingRef, show, hide]);

  return (
    <LoadingContext.Provider value={valueContext}>
      {children}
      <LoadingSpinner childRef={loadingRef} />
    </LoadingContext.Provider>
  );
};

export default LoadingWrapper;

export const useLoading = () => useContext(LoadingContext);
