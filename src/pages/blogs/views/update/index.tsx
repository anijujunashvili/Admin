import UpdateBlog from "../../components/update";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../../../supabase/admin/blogs";
import { useQuery } from "@tanstack/react-query";

export const BlogUpdateView = () => {
  const params = useParams();

  const { data } = useQuery({
    queryKey: ["getBlog", params.id],
    queryFn: () => getSingleBlog(params.id as string),
    select: (data) => {
      if (data) {
        return data[0];
      }
    },
  });

  const initialValues = {
    title_ka: data ? data["title_ka"] : "",
    title_en: data ? data["title_en"] : "",
    description_ka: data ? data["description_ka"] : "",
    description_en: data ? data["description_en"] : "",
  };

  return (
    <>
      <UpdateBlog initialValues={initialValues} />
    </>
  );
};
