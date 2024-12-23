import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { BlogType } from "../../../../supabase/admin/blogs/types";
import { useParams, useNavigate } from "react-router-dom";
import { useEditBlog } from "../../../../react-query/mutation/blogs";

type FieldType = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
};
const UpdateBlog: React.FC<{ initialValues: BlogType }> = ({
  initialValues,
}) => {
  const { Item } = Form;
  const [form] = useForm<FieldType>();
  const params = useParams();
  const navigate = useNavigate();

  const { mutate: update } = useEditBlog();

  const handleSubmit = (values: BlogType) => {
    const payload = { payload: { id: params.id as string, values: values } };
    update(payload, {
      onSuccess: () => {
        navigate("/blogs");
      },
    });
  };

  return (
    <>
      <Form<FieldType>
        name="basic"
        form={form}
        initialValues={initialValues}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Item<FieldType>
          label="Title (ka)"
          name="title_ka"
          rules={[{ required: true, message: "Please input your text!" }]}
        >
          <Input />
        </Item>
        <Item<FieldType> label="Title (en)" name="title_en">
          <Input />
        </Item>
        <Item<FieldType> label="Description (ka)" name="description_ka">
          <Input />
        </Item>
        <Item<FieldType> label="Description (en)" name="description_en">
          <Input />
        </Item>

        <Item label={null}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Item>
      </Form>
    </>
  );
};

export default UpdateBlog;
