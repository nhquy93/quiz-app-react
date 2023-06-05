import { Avatar, Input, Typography } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  SwapOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Header.css";

const { Title, Text } = Typography;

export default function Header() {
  return (
    <div className="header">
      <div className="header__menu">
        <MenuOutlined
          style={{ fontSize: "24px", color: "#fff", cursor: "pointer" }}
        />
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
      <div className="header__title">
        <Text level={3}>Hello, {"James"}</Text>
        <Title level={4} style={{ margin: 0 }}>
          Let's test your knowledge
        </Title>
      </div>
      <div className="header__searchbox">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined style={{ color: "#008dff" }} />}
          suffix={<SwapOutlined style={{ color: "#008dff" }} />}
        />
      </div>
    </div>
  );
}
