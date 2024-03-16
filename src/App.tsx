import router from "@/routes/routes";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/index.css";
import LoadingWrapper from "@/shared/contexts/LoadingWrapper";

function App() {
  return (
    <LoadingWrapper>
      <RouterProvider router={router} />
    </LoadingWrapper>
  );
}

export default App;
