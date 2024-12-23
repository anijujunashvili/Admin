import { BLOG_MUTATION_KEYS } from "./enum";
import { useMutation } from "@tanstack/react-query";
import { addBlog, editBlog } from "../../../supabase/admin/blogs";
// import { useNavigate } from "react-router-dom";
// import { PostgrestError } from "@supabase/supabase-js";

// export const useAddBlog = <T>({
//   mutationOptions,
//   payload,
// }: {
//   mutationOptions?: Omit<
//     UseMutationOptions<Blog[], PostgrestError, BlogType, T>,
//     "mutationKey"
//   >;
//   payload?: BlogType;
// } = {}): UseMutationResult<Blog[], PostgrestError, BlogType, T> => {
//   return useMutation<Blog[], PostgrestError, BlogType, T>({
//     mutationKey: [BLOG_MUTATION_KEYS.ADD],
//     mutationFn: () => addBlog(payload),
//     ...mutationOptions,
//   });
// };
// type FieldType = {
//   title_ka: string;
//   title_en: string;
//   description_ka: string;
//   description_en: string;
// };

export const useAddBlog = () => {
  return useMutation({
    mutationKey: [BLOG_MUTATION_KEYS.ADD],
    mutationFn: addBlog,
  });
};

export const useEditBlog = () => {
  return useMutation({
    mutationKey: [BLOG_MUTATION_KEYS.UPDATE],
    mutationFn: editBlog,
  });
};
