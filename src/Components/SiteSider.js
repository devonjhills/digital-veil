import { Button, Menu, Tooltip } from "antd";
import {RiMenuUnfoldFill, RiMenuFoldFill} from "react-icons/ri"
import {FiSettings, FiUsers, FiFolder} from "react-icons/fi"
import {FaDesktop} from "react-icons/fa"
import React from "react";

const SiteSider = ({ collapsed, handleCollapse }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", paddingTop: "10px" }}>
      <Tooltip placement="right" title={collapsed ? "Expand" : "Collapse"}>
      <Button
        type="ghost"
        size="large"
        icon={collapsed ? <RiMenuUnfoldFill /> : <RiMenuFoldFill />}
        onClick={() => handleCollapse(!collapsed)}
        style={{ alignSelf: "flex-end", color: "white" }}
      />
      </Tooltip>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{
          marginTop: "10px",
          backgroundColor: "#0e1217"
        }}
      >
        <Menu.Item key="1" icon={<FiFolder />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<FaDesktop />}>
          Option 2
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<FiUsers />} title="User">
          <Menu.Item key="3">Neo</Menu.Item>
          <Menu.Item key="4">Anderson</Menu.Item>
          <Menu.Item key="5">Wick</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="9" icon={<FiSettings />}>
          Settings
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SiteSider;
