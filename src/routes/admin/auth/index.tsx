import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ADMIN_PATHS } from "../enum";

const LoginPage = lazy(() => import("../../../pages/auth/components/login"));

export const LOGIN_ROUTE = [
  <Route
    path={ADMIN_PATHS.LOGIN}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    }
  />,
  <Route
    index
    path="/"
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    }
  />,
];
