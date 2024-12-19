import { Outlet, Link, useLocation } from "react-router";
import { Layout, Menu, MenuProps, theme } from "antd";
import { logout } from "../supabase/auth";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: `users`,
    label: `Users`,

    children: [
      {
        key: 0,
        label: <Link to="users">Users</Link>,
      },
    ],
  },
  {
    key: `blogs`,
    label: `Blogs`,

    children: [
      {
        key: 1,
        label: <Link to="blogs">Blogs</Link>,
      },
    ],
  },
];

const DashboardLayout = () => {
  const location = useLocation();

  const selected = location.pathname.includes("blogs") ? "blogs" : "users";
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <div className="demo-logo" />
          <div style={{ cursor: "pointer" }} onClick={logout}>
            Logout
          </div>
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <Layout
            style={{
              padding: "24px 0",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[selected]}
                defaultOpenKeys={[selected]}
                style={{ height: "100%" }}
                items={items2}
              />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: "80vh" }}>
              <Outlet />
            </Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};

export default DashboardLayout;
