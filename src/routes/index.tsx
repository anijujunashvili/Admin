import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "../pages/404";
import AuthLayout from "../layouts/auth.tsx";
import DashboardLayout from "../layouts/dashboard.tsx";
import { BLOGS_ROUTES } from "./admin/blog";
import { USERS_ROUTES } from "./admin/users";
import { LOGIN_ROUTE } from "./admin/auth";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<AuthLayout />}>{LOGIN_ROUTE}</Route>
          <Route element={<DashboardLayout />}>
            {BLOGS_ROUTES}
            {USERS_ROUTES}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
