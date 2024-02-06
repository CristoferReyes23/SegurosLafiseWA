import { useAuthentication } from "../hooks/useAuthentication";
import { Navigate } from "react-router-dom";

const RootView = () => {
  const { isFetching, isLogged } = useAuthentication();
  if (isFetching) return <div>wait a moment</div>;

  console.log("isLogged", isLogged);

  return <Navigate to={isLogged ? "dashboard" : "unauthorized"} replace />;
};

export default RootView;
