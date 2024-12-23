import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { getBlogList, getSingleBlog } from "../../../supabase/admin/blogs";
import { Blog, BlogType } from "../../../supabase/admin/blogs/types";
import { PostgrestError } from "@supabase/supabase-js";
import { BLOGS_QUERY_KEYS } from "./enum";

export const useGetBlogsList = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<Blog[], PostgrestError, T>, "queryKey">;
} = {}): UseQueryResult<T, PostgrestError> => {
  return useQuery<Blog[], PostgrestError, T>({
    queryKey: [BLOGS_QUERY_KEYS.BLOG_LIST],
    queryFn: () => getBlogList(),
    ...queryOptions,
  });
};

export const useGetSingleBlog = <T>({
  queryOptions,
  id,
}: {
  queryOptions?: Omit<UseQueryOptions<BlogType, PostgrestError, T>, "queryKey">;
  id: string;
}): UseQueryResult<T, PostgrestError> => {
  return useQuery<BlogType, PostgrestError, T>({
    queryKey: [BLOGS_QUERY_KEYS.BLOG_LIST],
    queryFn: () => getSingleBlog(id),
    ...queryOptions,
  });
};
