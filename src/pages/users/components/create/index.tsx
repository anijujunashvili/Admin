import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "../../../../react-query/mutation/users";

type FieldType = {
  email: string;
  phone: string;
};

const CreateUserForm = () => {
  const { Item } = Form;
  const [form] = useForm<FieldType>();
  const navigate = useNavigate();

  const { mutate: createUser } = useCreateUser();

  const handleSubmit = (values: { email: string; phone: string }) => {
    createUser(values, {
      onSuccess: () => {
        navigate("/users");
      },
    });
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
