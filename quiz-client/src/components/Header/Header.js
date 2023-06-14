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
import { GetReturnTime } from "../../utils/Time2String";
import { toastConfirm } from "../../utils/sweet-alert";

const { Title, Text } = Typography;

export default function Header(props) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { questionGroupId } = useParams();

  const topicList = useSelector((store) => store.topicsSlice.topicList);
  const user = useSelector((store) => store.authSlice.auth.user);
  const [searchItem, setSearchItem] = useState("");
  const [timeExpired, setTimeExpired] = useState(0);

  useEffect(() => {
    let questionGroup = {};
    if (questionGroupId !== undefined) {
      topicList.forEach((groups) => {
        const item = groups.questionGroups.find(
          (x) => x.id === questionGroupId
        );
        if (item) {
          questionGroup = { ...item };
          if (questionGroup) {
            setTimeExpired(questionGroup.timeExpired); // 180
          }
        }
      });
    }
  }, [timeExpired, questionGroupId, topicList]);

  useEffect(() => {
    dispatch(setSearchItems(searchItem));
  }, [searchItem, dispatch]);

  const signout = () => dispatch(setUser(null));

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
        <StartHeader title="UI UX Design" timeExpired={10} />
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

const StartHeader = ({ title, timeExpired }) => {
  const [timeLeft, setTimeLeft] = useState(timeExpired || 0);
  const [timeDisplay, setTimeDisplay] = useState();

  useEffect(() => {
    const logicTimer = () => {
      if (timeLeft === 0) {
        // Logic when time has been over here
        toastConfirm("Time over!!!", "success");
        return;
      } else {
        setTimeLeft((prev) => prev - 1);
        const time = GetReturnTime(timeLeft);
        setTimeDisplay(time);
      }
    };
    const timeOutId = setTimeout(logicTimer, 1000);
    return () => clearTimeout(timeOutId);
  }, [timeLeft]);

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
          {timeDisplay}
        </span>
      </div>
    </>
  );
};
