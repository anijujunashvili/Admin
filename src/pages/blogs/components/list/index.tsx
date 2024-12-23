import { useNavigate } from "react-router";
import { Button, Table } from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useGetBlogsList } from "../../../../react-query/query/blogs";
import { mapBlogsListForAdmin } from "../../../../supabase/admin/blogs/utils";

const BlogsList = () => {
  const navigate = useNavigate();
  const { Column } = Table;

  const { data, isPending } = useGetBlogsList({
    queryOptions: { select: mapBlogsListForAdmin },
  });

  const handleNavigateToBlogsEdit = (id: string) => {
    navigate(`/blogs/edit/${id}`);
  };

  return (
    <>
      <Table
        loading={isPending}
        title={() => {
          return (
            <Button type="primary" onClick={() => navigate("/blogs/create")}>
              Add Blog <PlusOutlined />{" "}
            </Button>
          );
        }}
        bordered
        dataSource={data}
      >
        <Column title="Title (ka)" dataIndex="title_ka" />
        <Column title="Created At" dataIndex="created_at" />
        <Column title="description (ka)" dataIndex="description_ka" />
        <Column
          title="Image"
          dataIndex="title_ka"
          render={(_, row) => {
            const imgPath = import.meta.env.VITE_SUPABASE_STORAGE_URL;
            return <img src={`${imgPath}${row.image_url}`} width={200} />;
          }}
        />
        <Column
          title="Action"
          dataIndex="action"
          render={(_, row) => {
            return (
              <EditOutlined
                onClick={() => handleNavigateToBlogsEdit(row?.id)}
              />
            );
          }}
        />
      </Table>
    </>
  );
};

export default BlogsList;
