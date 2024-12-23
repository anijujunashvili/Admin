import { USER_QUERY_KEYS } from "./enum.ts";
import { getUsersList, User, getUserInfo } from "../../../supabase/admin/users";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { PostgrestError } from "@supabase/supabase-js";
//AuthApiError
export const useGetUserInfo = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<User[], PostgrestError, T>, "queryKey">;
} = {}): UseQueryResult<T, PostgrestError> => {
  return useQuery<User[], PostgrestError, T>({
    queryKey: [USER_QUERY_KEYS.LIST],
    queryFn: () => getUsersList(),
    ...queryOptions,
  });
};

type UserInfo = {
  email: string;
  phone: string;
};

export const useGetSingleUserInfo = <T>({
  queryOptions,
  id,
}: {
  queryOptions?: Omit<UseQueryOptions<UserInfo, PostgrestError, T>, "queryKey">;
  id?: string;
} = {}): UseQueryResult<T, PostgrestError> => {
  return useQuery<UserInfo, PostgrestError, T>({
    queryKey: [USER_QUERY_KEYS.SINGLE_USER, id],
    queryFn: () => getUserInfo(id as string),
    ...queryOptions,
  });
};
