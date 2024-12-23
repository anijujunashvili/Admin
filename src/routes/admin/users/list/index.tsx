import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ADMIN_PATHS } from "../../enum";
import AuthGuard from "../../../route-guards";

const UsersListLazy = lazy(
  () => import("../../../../pages/users/components/list")
);

export const USERS_LIST_ROUTE = [
  <Route
    path={ADMIN_PATHS.USERS_LIST}
    element={
      <AuthGuard>
        <Suspense fallback={<div>Loading...</div>}>
          <UsersListLazy />
        </Suspense>
      </AuthGuard>
    }
  ></Route>,
];
