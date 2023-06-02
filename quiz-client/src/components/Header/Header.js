import { Avatar, Col, Input, Row, Typography } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  SwapOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__menu">
        <MenuOutlined style={{ fontSize: "24px", color: "#fff" }} />
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
      <div className="header__title">
        <Typography.Text level={3}>Hello, {"James"}</Typography.Text>
        <Typography.Title level={4} style={{ margin: 0 }}>
          Let's test your knowledge
        </Typography.Title>
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
