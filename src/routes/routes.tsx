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
import CreateQuote from "modules/Quote/views/Create/CreateQuote";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route id="root" path="/" element={<RootView />} />

      <Route element={<ProtectedLayout />} loader={protectedLayoutLoader}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="policy" element={<CreatePolicy />} />
        <Route path="quote/create" element={<CreateQuote />} />
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
