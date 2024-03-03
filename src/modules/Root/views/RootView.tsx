import { RootViewHelper } from "@/modules/Root/views/RootView.helper";
import LoadingSpinner from "@/shared/components/LoadingSpinner/LoadingSpinner";
import { Navigate } from "react-router-dom";

const RootView = () => {
  const { isFetching, isLogged, loadingRef } = RootViewHelper();
  if (isFetching) return <LoadingSpinner childRef={loadingRef} />;

  return <Navigate to={isLogged ? "dashboard" : "unauthorized"} replace />;
};

export default RootView;
