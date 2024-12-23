import { useNavigate } from "react-router";
import { Button, Table } from "antd";
import { useGetUserInfo } from "../../../../react-query/query/users/index";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { mapUsersListForAdmin } from "../../../../supabase/admin/users/utils";

const UsersList = () => {
  const navigate = useNavigate();
  const { Column } = Table;

  const { data, isPending } = useGetUserInfo({
    queryOptions: { select: mapUsersListForAdmin },
  });

  const handleNavigateToUsersEdit = (id: string) => {
    navigate(`/users/edit/${id}`);
  };

  return (
    <>
      <Table
        loading={isPending}
        title={() => {
          return (
            <Button type="primary" onClick={() => navigate("/users/create")}>
              Add User <PlusOutlined />{" "}
            </Button>
          );
        }}
        bordered
        dataSource={data || []}
      >
        <Column title="Email" dataIndex="email" />
        <Column title="Created At" dataIndex="createdAt" />
        <Column title="Phone" dataIndex="phone" />
        <Column title="Last Sign In" dataIndex="lastSignIn" />
        <Column
          title="Action"
          dataIndex="action"
          render={(_, row) => {
            return (
              <EditOutlined
                onClick={() => handleNavigateToUsersEdit(row?.id)}
              />
            );
          }}
        />
      </Table>
    </>
  );
};

export default UsersList;
