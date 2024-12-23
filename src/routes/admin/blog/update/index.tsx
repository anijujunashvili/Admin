import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ADMIN_PATHS } from "../../enum";

const UpdateBlogsLazy = lazy(
  () => import("../../../../pages/blogs/views/update")
);

export const EDIT_BLOG_ROUTE = [
  <Route
    path={ADMIN_PATHS.BLOGS_UPDATE + "/:id"}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <UpdateBlogsLazy />
      </Suspense>
    }
  />,
];
