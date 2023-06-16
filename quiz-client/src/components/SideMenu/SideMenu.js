import React from "react";
import { Menu } from "antd";
import { HomeFilled, PoweroffOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./SideMenu.css";

export default function SideMenu() {
  const navigate = useNavigate();
  const items = [
    { key: "/", label: "Home", icon: <HomeFilled /> },
    {
      key: "logout",
      label: "Logout",
      danger: true,
      icon: <PoweroffOutlined />,
    },
  ];
  return (
    <div className="sidebar">
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["/"]}
        items={items}
        onClick={({ key }) => {
          if (key === "logout") {
            // TO DO logout here
          } else {
            navigate(key);
          }
        }}
      ></Menu>
    </div>
  );
}
