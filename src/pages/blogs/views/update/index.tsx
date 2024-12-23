import UpdateBlog from "../../components/update";
import { useParams } from "react-router-dom";
import { useGetSingleBlog } from "../../../../react-query/query/blogs";
import { mapSingleBlogForAdmin } from "../../../../supabase/admin/blogs/utils";
import { BlogType } from "../../../../supabase/admin/blogs/types";

const BlogUpdateView = () => {
  const params = useParams();

  const { data, isPending } = useGetSingleBlog({
    queryOptions: { select: mapSingleBlogForAdmin },
    id: params.id as string,
  });

  return (
    <>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <UpdateBlog initialValues={data as BlogType} />
      )}
    </>
  );
};

export default BlogUpdateView;
