import { Button, Form, Input, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import { Blog, addBlog, BlogType } from "../../../../supabase/admin/blogs";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UploadOutlined } from "@ant-design/icons";
import { userAtom } from "../../../../store/auth";
import { useAtom } from "jotai";

const CreateBlog = () => {
  const [user] = useAtom(userAtom);
  const { Item } = Form;
  const [form] = useForm<Blog>();
  const navigate = useNavigate();

  const { mutate: CreateBlog } = useMutation({
    mutationKey: ["addBlog"],
    mutationFn: addBlog,
    onSuccess: () => {
      navigate("/blogs");
    },
  });
  const handleSubmit = (values: BlogType) => {
    if (values?.image_file) {
      const payload = { ...values, user_id: user?.user?.id };
      console.log(payload);
      CreateBlog(payload);
    }
  };
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <>
      <Form<Blog>
        name="basic"
        form={form}
        onFinish={handleSubmit}
        style={{ width: "500px" }}
        autoComplete="off"
      >
        <Item<Blog>
          label="Title (ka)"
          name="title_ka"
          rules={[{ required: true, message: "Please input your text!" }]}
        >
          <Input />
        </Item>
        <Item<Blog> label="Title (en)" name="title_en">
          <Input />
        </Item>
        <Item<Blog> label="Description (ka)" name="description_ka">
          <Input />
        </Item>
        <Item<Blog> label="Description (en)" name="description_en">
          <Input />
        </Item>
        <Form.Item
          name="image_file"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            name="logo"
            action={import.meta.env.VITE_SUPABASE_STORAGE_URL}
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
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
