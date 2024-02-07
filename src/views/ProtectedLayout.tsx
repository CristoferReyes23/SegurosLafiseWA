import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  console.log("paint here");

  return <Outlet />;
};

export default ProtectedLayout;
