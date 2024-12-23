import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { BlogType } from "../../../../supabase/admin/blogs/types";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../../../../store/auth";
import { useAtom } from "jotai";
import { useAddBlog } from "../../../../react-query/mutation/blogs";

const CreateBlog = () => {
  const [user] = useAtom(userAtom);
  const { Item } = Form;
  const [form] = useForm<BlogType>();
  const navigate = useNavigate();

  const { mutate: addNewBlog } = useAddBlog();

  const handleSubmit = (values: BlogType) => {
    const payload = { ...values, user_id: user?.user?.id };

    addNewBlog(payload, {
      onSuccess: () => {
        navigate("/blogs");
      },
    });
  };

  return (
    <>
      <Form<BlogType>
        name="basic"
        form={form}
        onFinish={handleSubmit}
        style={{ width: "500px" }}
        autoComplete="off"
      >
        <Item<BlogType>
          label="Title (ka)"
          name="title_ka"
          rules={[{ required: true, message: "Please input your text!" }]}
        >
          <Input />
        </Item>
        <Item<BlogType> label="Title (en)" name="title_en">
          <Input />
        </Item>
        <Item<BlogType> label="Description (ka)" name="description_ka">
          <Input />
        </Item>
        <Item<BlogType> label="Description (en)" name="description_en">
          <Input />
        </Item>
        <Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: "20px" }}
          >
            Add
          </Button>
        </Item>
      </Form>
    </>
  );
};

export default CreateBlog;
