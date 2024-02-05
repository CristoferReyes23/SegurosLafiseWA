import { useAuthentication } from "@/hooks/useAuthentication";
import { Navigate } from "react-router-dom";

const RootLayout = () => {
  const { isFetching, isLogged } = useAuthentication();

  if (isFetching) return <div>wait a moment</div>;

  return (
    <Navigate
      to={isLogged ? "dashboard" : "unauthorized"}
      replace
      state={{ isOk: true }}
    />
  );
};

export default RootLayout;
