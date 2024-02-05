import { useAuthStateContext } from "@/contexts/authContext/auth.context";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const { isLogged } = useAuthStateContext();

  console.log("isLogged", isLogged);

  return isLogged ? <Outlet /> : <Navigate to={"unauthorized"} replace />;
};

export default ProtectedLayout;
