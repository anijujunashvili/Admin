import { EDIT_BLOG_ROUTE } from "./update";
import { BLOG_LIST_ROUTE } from "./list";
import { CREATE_BLOG_ROUTE } from "./create";

export const BLOGS_ROUTES = [
  ...EDIT_BLOG_ROUTE,
  ...BLOG_LIST_ROUTE,
  ...CREATE_BLOG_ROUTE,
];
