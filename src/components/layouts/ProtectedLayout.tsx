import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const session = { isLogged: false };

  return session.isLogged ? (
    <Outlet />
  ) : (
    <Navigate to={"unauthorized"} replace />
  );
};

export default ProtectedLayout;
