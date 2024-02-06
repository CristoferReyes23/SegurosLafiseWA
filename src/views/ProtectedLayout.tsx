import { AuthSessionService } from "@/modules/Authentication/services/AuthSession.service";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const session = AuthSessionService.getSession();

  if (!session || !session.isLogged)
    return <Navigate to={"unauthorized"} replace />;

  return <Outlet />;
};

export default ProtectedLayout;
