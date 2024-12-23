import dayjs from "dayjs";
import { Blog, BlogType } from "./types";

export const mapBlogsListForAdmin = (blogs: Blog[]) => {
  return blogs?.map((blog) => ({
    id: blog?.id,
    title_ka: blog?.title_ka,
    title_en: blog?.title_en,
    description_ka: blog?.description_ka,
    description_en: blog?.description_en,
    image_url: blog?.image_url,
    user_id: blog?.user_id,
    key: blog?.id,
    created_at: dayjs(blog?.created_at).format("YYYY-MM-DD HH:mm"),
  }));
};

export const mapSingleBlogForAdmin = (blog: BlogType) => {
  return {
    title_ka: blog?.title_ka,
    title_en: blog?.title_en,
    description_ka: blog?.description_ka,
    description_en: blog?.description_en,
    user_id: blog?.user_id,
    image_file: blog?.image_file,
    key: blog?.user_id,
  };
};
