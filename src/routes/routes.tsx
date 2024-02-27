import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { protectedLayoutLoader, unauthorizedLoader } from "@/routes/loaders";

import Unauthorized from "@/views/Unauthorized";
import ProtectedLayout from "@/views/ProtectedLayout/ProtectedLayout";
import RootView from "modules/Root/views/RootView";
import CreateQuote from "modules/Quote/views/Create/CreateQuote";
import CreatePolicy from "@/modules/Policy/view/CreatePolicy";
import Dashboard from "@/modules/Dashboard/views/Dashboard";
import { Printer } from "@/modules/Printer/views/Printer";
import ErrorBoundary from "@/views/ErrorBoundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route id="root" index element={<RootView />} errorElement={<ErrorBoundary />} />

      <Route element={<ProtectedLayout />} loader={protectedLayoutLoader} errorElement={<ErrorBoundary />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="policy" element={<CreatePolicy />} />
        <Route path="quote/create" element={<CreateQuote />} />
        <Route path="printer" element={<Printer />} />
      </Route>

      <Route path="unauthorized" element={<Unauthorized />} loader={unauthorizedLoader} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </>
  )
);

export default router;
