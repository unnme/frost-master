import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import { RoutePaths } from "@general/RoutePaths.jsx";
import { Layout } from "@general/Layout.jsx";

const Home = lazy(() => import("@pages/Home.jsx"));
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
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
