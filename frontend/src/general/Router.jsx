import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "@general/Layout.jsx";
import { RoutePaths } from "@general/RoutePaths.jsx";

const Home = lazy(() => import("@pages/Home.jsx"));
const Privacy = lazy(() => import("@pages/Privacy.jsx"));
const NotFound = lazy(() => import("@pages/system/NotFound.jsx"));

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.PRIVACY}
      element={
        <Layout>
          <Privacy />
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
