import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { protectedLayoutLoader, unauthorizedLoader } from "@/routes/loaders";

import Unauthorized from "@/views/Unauthorized";
import ProtectedLayout from "@/views/ProtectedLayout/ProtectedLayout";
import RootView from "modules/Root/views/RootView";
import { Dashboard } from "modules/Dashboard/views";
import { CreatePolicy } from "modules/Policy/pages";
import { QuotePage } from "modules/Quote/pages";

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
