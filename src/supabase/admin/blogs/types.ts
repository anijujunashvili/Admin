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
export type editBlogType = {
  payload: {
    id: string;
    values: BlogType;
  };
};
