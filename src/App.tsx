import AuthWrapper from "@/contexts/authContext/auth.wrapper";
import router from "@/routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  );
}

export default App;
