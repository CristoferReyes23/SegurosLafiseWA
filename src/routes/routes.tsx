import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CreatePolicy } from "@modules/Policy/pages";
import { QuotePage } from "@modules/Quote/pages";
import { Dashboard } from "@modules/Dashboard/views";
import Unauthorized from "@/views/Unauthorized";
import { RootLayout } from "@/components/layouts";
import ProtectedLayout from "@/components/layouts/ProtectedLayout";
import { unauthorizedLoader } from "@/routes/loaders/unauthorized.loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route id="root" path="/" element={<RootLayout />} />

      <Route element={<ProtectedLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="policy" element={<CreatePolicy />} />
        <Route path="quote" element={<QuotePage />} />
      </Route>
      <Route
        path="unauthorized"
        element={<Unauthorized />}
        loader={unauthorizedLoader}
      />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Route>
  )
);

export default router;
