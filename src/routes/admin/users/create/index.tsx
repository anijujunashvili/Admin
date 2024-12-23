import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ADMIN_PATHS } from "../../enum";

const CreateUsearsLazy = lazy(
  () => import("../../../../pages/users/components/create")
);

export const CREATE_USER_ROUTE = [
  <Route
    path={ADMIN_PATHS.USERS_CREATE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <CreateUsearsLazy />
      </Suspense>
    }
  />,
];
