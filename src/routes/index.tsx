import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "../pages/404";
import { EditUserView, CreateUserView, UsersListView } from "../pages/users";
import { BlogsListView, BlogUpdateView, CreateBlogView } from "../pages/blogs";
import { LoginPageView } from "../pages/auth";
import AuthLayout from "../layouts/auth.tsx";
import DashboardLayout from "../layouts/dashboard.tsx";
import AuthGuard from "./route-guards/index.tsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<AuthLayout />}>
            <Route index path="/" element={<LoginPageView />}></Route>
            <Route path="/login" element={<NotFound />}></Route>
          </Route>
          <Route element={<DashboardLayout />}>
            <Route
              path="blogs"
              element={
                <AuthGuard>
                  <BlogsListView />
                </AuthGuard>
              }
            ></Route>
            <Route path="blogs/edit/:id" element={<BlogUpdateView />}></Route>
            <Route path="blogs/create" element={<CreateBlogView />}></Route>
            <Route
              path="users"
              element={
                <AuthGuard>
                  <UsersListView />
                </AuthGuard>
              }
            ></Route>
            <Route path="users/edit/:id" element={<EditUserView />}></Route>
            <Route path="users/create" element={<CreateUserView />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
