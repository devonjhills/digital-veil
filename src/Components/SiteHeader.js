import { Button, Space, Switch, Typography } from "antd";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import React from "react";

const { Text } = Typography;

const SiteHeader = ({ darkMode, handleModeToggle }) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: "48px", width: "auto", marginRight: "10px" }}
        />
        <Text strong style={{ fontSize: "18px", color: "whitesmoke" }}>
          Digital Veil
        </Text>
      </div>
      <Space>
        <Switch
          checked={darkMode}
          checkedChildren={<BulbOutlined />}
          unCheckedChildren={<BulbFilled />}
          onChange={handleModeToggle}
          size="large"
        />
        <Button style={{marginLeft: "10px"}}>Log in</Button>
        <Button type="primary">
          Sign up
        </Button>
      </Space>
    </>
  );
};

export default SiteHeader;
