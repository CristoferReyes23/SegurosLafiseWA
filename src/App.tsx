import AuthWrapper from "@/hooks/authContext/auth.wrapper";
import router from "@/routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <RouterProvider router={router} />;
    </AuthWrapper>
  );
}

export default App;
