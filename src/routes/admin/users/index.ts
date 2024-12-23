import { USERS_LIST_ROUTE } from "./list";
import { CREATE_USER_ROUTE } from "./create";
import { UPDATE_USER_ROUTE } from "./update";

export const USERS_ROUTES = [
  ...USERS_LIST_ROUTE,
  ...CREATE_USER_ROUTE,
  ...UPDATE_USER_ROUTE,
];
