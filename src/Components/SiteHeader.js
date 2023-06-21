import { Button, Space, Typography } from "antd";
import { BulbFilled } from "@ant-design/icons";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { ReactComponent as MoonIcon } from "../Assets/Images/moon.svg";
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
      <div style={{ display: "flex", alignItems: "center" }}>
      
        <Button
          size="large"
          type="default"
          
          onClick={handleModeToggle}
        >
          {darkMode ? <BsSunFill color="orange" size={24} /> : <BsMoonFill color="black" size={24}/>}
        </Button>
        <Button size="large" >Log in</Button>
        <Button size="large" type="primary">Sign up</Button>
      </div>
    </>
  );
};

export default SiteHeader;
