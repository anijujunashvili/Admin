import { getUsersList } from "../../../supabase/dashboard/users";
import { useQuery } from "@tanstack/react-query";

import { Button, Table } from "antd";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

export const UsersList = () => {
  const { Column } = Table;
  const { data } = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsersList,
    select: (data) => data?.users,
  });

  return (
    <>
      <Table
        title={() => {
          return (
            <Button type="primary">
              Add User <PlusOutlined />{" "}
            </Button>
          );
        }}
        bordered
        dataSource={data}
      >
        <Column title="Email" dataIndex="email" />
        <Column title="Created At" dataIndex="created_at" />
        <Column title="Phone" dataIndex="phone" />
        <Column title="Last Sign In" dataIndex="last_sign_in_at" />
        <Column
          title="Action"
          dataIndex="action"
          render={() => {
            return <EditOutlined />;
          }}
        />
      </Table>
    </>
  );
};
