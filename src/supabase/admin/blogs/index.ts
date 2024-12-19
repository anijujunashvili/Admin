import { supabase } from "../..";
import { mapBlogsListForAdmin } from "./utils.ts";
export type BlogType = {
  title_ka?: string;
  title_en?: string;
  description_ka?: string;
  description_en?: string;
  image_file?: null | File[];
  user_id?: string;
};

export type Blog = {
  id: string | number;
  title_ka: string | null;
  title_en: string | null;
  description_ka: string | null;
  description_en: string | null;
  image_url: string | null;
  created_at: string;
  user_id: string;
  key: string;
};
export const addBlog = async (payload: BlogType) => {
  if (payload?.image_file) {
    console.log(payload?.image_file[0]);
    supabase.storage
      .from("blog_images")
      .upload(payload?.image_file[0].name, payload?.image_file[0])
      .then((res) => {
        return supabase.from("blogs").insert({
          title_ka: payload.title_ka,
          title_en: payload.title_en,
          description_ka: payload.description_ka,
          description_en: payload.description_en,
          image_url: res.data?.fullPath,
          user_id: payload.user_id,
        });
      })
      .then((res) => {
        console.log("Successfully Created Blog: ", res);
      });
  }
};

export const editBlog = async (id: string, payload: BlogType) => {
  try {
    return supabase.from("blogs").update(payload).eq("id", id);
  } catch (error) {
    console.log("Error during edit blog", error);
  }
};

export const getSingleBlog = async (id: string) => {
  try {
    const result = await supabase.from("blogs").select("*").eq("id", id);

    return result.data;
  } catch (error) {
    console.log("Error during get blog", error);
  }
};

export const getBlogList = async () => {
  try {
    const result = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    return result ? mapBlogsListForAdmin(result?.data as Blog[]) : "";
  } catch (error) {
    console.log("Error during get blog list", error);
  }
};
