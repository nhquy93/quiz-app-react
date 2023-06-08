import { Avatar, Input, Typography } from "antd";
import {
  ArrowLeftOutlined,
  ClockCircleOutlined,
  MenuOutlined,
  SearchOutlined,
  StarFilled,
  SwapOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebar, setExpanded } from "../../redux/sidebar/sidebarSlice";

const { Title, Text } = Typography;

export default function Header(props) {
  const { pathname } = useLocation();

  return (
    <div className="header">
      {pathname === "/" && <HomeHeader username="James" />}
      {pathname === "/detail" && (
        <DetailHeader title="UI UX Design" desc="GET 100 Points" rate="4.8" />
      )}
      {pathname === "/start" && (
        <StartHeader title="UI UX Design" timeExpired={900} />
      )}
    </div>
  );
}

const HomeHeader = ({ username }) => {
  const [collapse, setCollapse] = useState(true);
  const dispatch = useDispatch();
  return (
    <>
      <div className="header__menu">
        <MenuOutlined
          onClick={() => {
            setCollapse(!collapse);
            dispatch(setExpanded(collapse));
          }}
          style={{ fontSize: "24px", cursor: "pointer" }}
        />
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
      <div className="header__title">
        <Text>Hello, {username}</Text>
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
    </>
  );
};

const DetailHeader = ({ title, desc, rate }) => (
  <>
    <div className="header__menu">
      <span>
        <Link to={"/"}>
          <ArrowLeftOutlined style={{ fontSize: "18px", marginRight: 12 }} />
        </Link>
        <Text className="header__menu__title">Detail Quiz</Text>
      </span>
      <Avatar size="large" icon={<UserOutlined />} />
    </div>
    <div className="header__title__detail">
      <span>
        <Title level={3} style={{ margin: 0 }}>
          {title}
        </Title>
        <Text type="secondary">{desc}</Text>
      </span>
      <span>
        <StarFilled /> {rate}
      </span>
    </div>
  </>
);

const StartHeader = ({ title, timeExpired }) => {
  const [timeLeft, setTimeLeft] = useState(timeExpired);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const getReturnValues = (timeLeft) => {
    const mins = parseInt(timeLeft / 60, 10);
    const secs = parseInt(timeLeft % 60, 10);

    return (
      (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs)
    );
  };

  return (
    <>
      <div className="header__menu">
        <span>
          <Link to={"/"}>
            <ArrowLeftOutlined style={{ fontSize: "18px", marginRight: 12 }} />
          </Link>
          <Text className="header__menu__title">{title}</Text>
        </span>
        <span className="time-box">
          <ClockCircleOutlined />
          {getReturnValues(timeLeft)}
        </span>
      </div>
    </>
  );
};
