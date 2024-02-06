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
import { unauthorizedLoader } from "@/routes/loaders/unauthorized.loader";
import RootView from "@modules/Authentication/views/RootView";
import ProtectedLayout from "@/views/ProtectedLayout";
import { protectedLayoutLoader } from "@/routes/loaders/protectedLayout.loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route id="root" path="/" element={<RootView />} />

      <Route element={<ProtectedLayout />} loader={protectedLayoutLoader}>
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
    </>
  )
);

export default router;
