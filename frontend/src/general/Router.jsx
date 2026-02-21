import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "@general/Layout.jsx";
import { ROUTE_PATHS } from "@general/routePaths.js";

const Home = lazy(() => import("@pages/Home.jsx"));
const Privacy = lazy(() => import("@pages/Privacy.jsx"));
const RepairKrasnodar = lazy(() => import("@pages/RepairKrasnodar.jsx"));
const RepairAdygea = lazy(() => import("@pages/RepairAdygea.jsx"));
const NotFound = lazy(() => import("@pages/system/NotFound.jsx"));

export const Router = () => (
  <Routes>
    <Route
      path={ROUTE_PATHS.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={ROUTE_PATHS.PRIVACY}
      element={
        <Layout>
          <Privacy />
        </Layout>
      }
    />
    <Route
      path={ROUTE_PATHS.REPAIR_KRASNODAR}
      element={
        <Layout>
          <RepairKrasnodar />
        </Layout>
      }
    />
    <Route
      path={ROUTE_PATHS.REPAIR_ADYGEA}
      element={
        <Layout>
          <RepairAdygea />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
