import { supabase } from "../..";
import { BlogType, Blog, editBlogType } from "./types";

export const addBlog = async (payload: BlogType) => {
  return supabase
    .from("blogs")
    .insert({
      title_ka: payload.title_ka,
      title_en: payload.title_en,
      description_ka: payload.description_ka,
      description_en: payload.description_en,
      image_url: "",
      user_id: payload.user_id,
    })
    .then((result) => {
      return result;
    });
};

export const editBlog = async ({ payload }: editBlogType) => {
  const values = payload.values;
  const id = payload.id;
  return supabase
    .from("blogs")
    .update(values)
    .eq("id", id)
    .then((result) => {
      return result;
    });
};

export const getSingleBlog = async (id: string) => {
  return supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .then((result) => {
      const res = result.data ? result.data[0] : result;
      return res as BlogType;
    });
};

export const getBlogList = async () => {
  return supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })
    .then((result) => {
      return result?.data as Blog[];
    });
};
