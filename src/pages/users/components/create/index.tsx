import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../../../../supabase/admin/users/index.ts";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email: string;
  phone: string;
};

const CreateUserForm = () => {
  const { Item } = Form;
  const [form] = useForm<FieldType>();
  const navigate = useNavigate();

  const { mutate: createUser } = useMutation({
    mutationKey: ["addUser", 23],
    mutationFn: (values: { email: string; phone: string }) => addUser(values),
    onSuccess: () => {
      navigate("/users");
    },
  });

  const handleSubmit = (values: { email: string; phone: string }) => {
    createUser(values);
  };
  return (
    <>
      <Form<FieldType>
        name="basic"
        form={form}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Item>

        <Item<FieldType>
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input />
        </Item>

        <Item label={null}>
          <Button type="primary" htmlType="submit">
            Add User
          </Button>
        </Item>
      </Form>
    </>
  );
};

export default CreateUserForm;
