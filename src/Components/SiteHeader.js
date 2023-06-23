import { Button, Typography } from "antd";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa"
//import { ReactComponent as MoonIcon } from "../Assets/Images/moon.svg";
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
        <Button size="large" type="default" shape="round" onClick={handleModeToggle}>
          {darkMode ? (
            <FaSun color="yellow" size={24} />
          ) : (
            <BsMoonFill color="blue" size={24} />
          )}
        </Button>
        <Button style={{marginLeft: "30px"}}>Log in</Button>
        <Button style={{marginLeft: "10px"}} type="primary">
          Sign up
        </Button>
      </div>
    </>
  );
};

export default SiteHeader;
