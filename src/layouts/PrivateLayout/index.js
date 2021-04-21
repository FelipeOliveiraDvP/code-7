import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./style.css";

const { Header, Content, Footer, Sider } = Layout;

function PrivateLayout({ children }) {
  return (
    <Layout className="main-layout">
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DollarCircleOutlined />}>
            <Link to="/dividas">Dívidas</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/users">Usuários</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Code 7 ©2021 Criado por Felipe de Oliveira
        </Footer>
      </Layout>
    </Layout>
  );
}

export default PrivateLayout;
