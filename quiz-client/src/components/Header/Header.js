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
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/auth/auth-slice";
import { setSearchItems } from "../../store/utils/utils-slice";
import localStorage from "redux-persist/es/storage";

const { Title, Text } = Typography;

export default function Header(props) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { questionGroupId } = useParams();

  const topicList = useSelector((store) => store.topicsSlice.topicList);
  const user = useSelector((store) => store.authSlice.auth.user);
  const [searchItem, setSearchItem] = useState("");

  let questionGroup = {};

  useEffect(() => {
    if (questionGroupId != undefined) {
      topicList.forEach((groups) => {
        const item = groups.questionGroups.find(
          (x) => x.id === questionGroupId
        );
        if (item) {
          questionGroup = { ...item };
          if (questionGroup) {
            localStorage.setItem("timeExpired", questionGroup.timeExpired);
          }
          return questionGroup;
        }
      });
    }
  });

  useEffect(() => {
    dispatch(setSearchItems(searchItem));
  }, [searchItem]);

  function signout() {
    dispatch(setUser(null));
  }

  return (
    <div className="header">
      {pathname === "/" && (
        <HomeHeader
          username={user.userName}
          onClickSignout={signout}
          onSearchItem={setSearchItem}
        />
      )}
      {pathname.includes("detail") && (
        <DetailHeader title="UI UX Design" desc="GET 100 Points" rate="4.8" />
      )}
      {pathname.includes("start") && (
        <StartHeader title="UI UX Design" />
      )}
    </div>
  );
}

const HomeHeader = ({ username, onClickSignout, onSearchItem }) => (
  <>
    <div className="header__menu">
      <MenuOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
      <div className="container_logo_user">
        <Avatar size="large" icon={<UserOutlined />} />
        <div className="logout_text">
          <Link
            to="#"
            onClick={() => {
              onClickSignout();
            }}
          >
            Signout
          </Link>
        </div>
      </div>
    </div>
    <div className="header__title">
      <Text>Hello, {username}</Text>
      <Title level={4} style={{ margin: 0 }}>
        Let's test your knowledge
      </Title>
    </div>

    <div className="header__searchbox">
      <Input
        onChange={(e) => onSearchItem(e.target.value)}
        placeholder="Search"
        prefix={<SearchOutlined style={{ color: "#008dff" }} />}
        suffix={<SwapOutlined style={{ color: "#008dff" }} />}
      />
    </div>
  </>
);

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

const timeExpired = await localStorage.getItem("timeExpired");

const StartHeader = ({ title }) => {
  const [timeLeft, setTimeLeft] = useState(parseInt(timeExpired, 10));
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
