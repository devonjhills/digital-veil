import React, { useState } from "react";
import { ConfigProvider, Layout, theme } from "antd";
import Homepage from "./Components/Homepage";
import SiteHeader from "./Components/SiteHeader";
import SiteSider from "./Components/SiteSider";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const { defaultAlgorithm, darkAlgorithm } = theme;

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: darkMode ? "#7F00FF" : "green",
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "15px",
            justifyContent: "space-between",
            backgroundColor: "black",
            borderBottom: "solid 1px grey"
          }}
        >
          <SiteHeader darkMode={darkMode} handleModeToggle={handleModeToggle} />
        </Header>
        <Layout>
          <Sider
            collapsed={collapsed}
            onCollapse={handleCollapse}
            style={{backgroundColor: "black", borderRight: "solid 1px grey"}}
          >
            <SiteSider collapsed={collapsed} handleCollapse={handleCollapse} />
          </Sider>
          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <Homepage />
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
