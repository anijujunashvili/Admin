import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ADMIN_PATHS } from "../../enum.ts";
import AuthGuard from "../../../route-guards";

const BlogListLazy = lazy(() => import("../../../../pages/blogs/views/list"));

export const BLOG_LIST_ROUTE = [
  <Route
    path={ADMIN_PATHS.BLOGS_LIST}
    element={
      <AuthGuard>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogListLazy />
        </Suspense>
      </AuthGuard>
    }
  />,
];
