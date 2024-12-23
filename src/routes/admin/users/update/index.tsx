import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ADMIN_PATHS } from "../../enum";

const UpdateUserComp = lazy(
  () => import("../../../../pages/users/views/update")
);

export const UPDATE_USER_ROUTE = [
  <Route
    path={ADMIN_PATHS.USERS_UPDATE + "/:id"}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <UpdateUserComp />
      </Suspense>
    }
  />,
];
