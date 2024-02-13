import { RootViewHelper } from "@/modules/Root/views/RootView.helper";
import { Navigate } from "react-router-dom";

const RootView = () => {
  const { isFetching, isLogged } = RootViewHelper();
  if (isFetching) return <div>wait a moment</div>;

  return <Navigate to={isLogged ? "dashboard" : "unauthorized"} replace />;
};

export default RootView;