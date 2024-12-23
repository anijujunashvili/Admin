import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ADMIN_PATHS } from "../../enum.ts";

const CreateBlogLazy = lazy(
  () => import("../../../../pages/blogs/components/create")
);

export const CREATE_BLOG_ROUTE = [
  <Route
    path={ADMIN_PATHS.BLOGS_CREATE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <CreateBlogLazy />
      </Suspense>
    }
  />,
];
