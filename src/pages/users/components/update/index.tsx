import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateUserInAdmin } from "../../../../react-query/mutation/users";

type FieldType = {
  email: string;
  phone: string;
};

const EditUser: React.FC<{ initialValues?: FieldType }> = ({
  initialValues,
}) => {
  const { Item } = Form;
  const [form] = useForm<FieldType>();
  const navigate = useNavigate();
  const params = useParams();
  const { mutate: update } = useUpdateUserInAdmin();

  const handleSubmit = (values: FieldType) => {
    update(
      { payload: { id: params.id as string, values: values } },
      {
        onSuccess: () => {
          navigate("/users");
        },
      }
    );
  };

  return (
    <Form<FieldType>
      name="basic"
      form={form}
      initialValues={initialValues}
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
          Update
        </Button>
      </Item>
    </Form>
  );
};

export default EditUser;
