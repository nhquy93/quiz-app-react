import { Avatar, Input, Skeleton, Typography } from "antd";
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
import { authSelector, setUser } from "../../store/features/authSlice";
import { searchItem, setSearchItems } from "../../store/features/utilSlice";
import { GetReturnTime } from "../../utils/Time2String";
import { toastConfirm } from "../../utils/sweet-alert";
import { KEYS } from "../../constants/keys.constant";
import { detailSelector } from "../../store/features/detailSlice";

const { Title, Text } = Typography;

export default function Header() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const _authSelector = useSelector(authSelector);
  const _detailSelector = useSelector(detailSelector);
  const [temp, setTemp] = useState("");

  useEffect(() => {
    dispatch(searchItem(temp));
  }, [temp]);

  const signout = () => dispatch(setUser(null));

  return (
    <div className="header">
      {pathname === "/" && (
        <HomeHeader
          username={_authSelector.auth.user.userName || ""}
          onClickSignout={signout}
          onSearchItem={(e) => setTemp(e)}
          isLoading={_authSelector.isLoading}
        />
      )}
      {pathname.includes("detail") && (
        <DetailHeader
          title={_detailSelector.detail?.name || ""}
          desc={`Get ${_detailSelector.detail?.totalQuestion * 10} Points` || 0}
          rate={_detailSelector.detail?.rate || 0}
          isLoading={_detailSelector.isLoading}
        />
      )}
      {pathname.includes("start") && (
        <StartHeader
          title={_detailSelector.detail?.name || ""}
          timeExpired={_detailSelector.detail?.timeExpired || 0}
        />
      )}
    </div>
  );
}

const HomeHeader = ({ username, onClickSignout, onSearchItem, isLoading }) => (
  <>
    <div className="header__menu">
      <MenuOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
      {isLoading ? (
        <Skeleton.Avatar active />
      ) : (
        <div className="container_logo_user">
          <Avatar size="large" icon={<UserOutlined />} />
          <div className="logout_text">
            <Link to="#" onClick={() => onClickSignout()}>
              Signout
            </Link>
          </div>
        </div>
      )}
    </div>
    <div className="header__title">
      {isLoading ? (
        <Skeleton active />
      ) : (
        <>
          <Text>Hello, {username}</Text>
          <Title level={4} style={{ margin: 0 }}>
            Let's test your knowledge
          </Title>
        </>
      )}
    </div>

    <div className="header__searchbox">
      {isLoading ? (
        <Skeleton.Input active />
      ) : (
        <Input
          onChange={(e) => onSearchItem(e.target.value)}
          placeholder="Search"
          prefix={<SearchOutlined style={{ color: "#008dff" }} />}
          suffix={<SwapOutlined style={{ color: "#008dff" }} />}
        />
      )}
    </div>
  </>
);

const DetailHeader = ({ title, desc, rate, isLoading }) => (
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
      {isLoading ? (
        <>
          <Skeleton.Input active />
          <Skeleton.Input active />
        </>
      ) : (
        <span>
          <Title level={3} style={{ margin: 0 }}>
            {title}
          </Title>
          <Text type="secondary">{desc}</Text>
        </span>
      )}
      <span>
        <StarFilled /> {rate}
      </span>
    </div>
  </>
);

const StartHeader = ({ title, timeExpired }) => {
  const localTitle = localStorage.getItem(KEYS.quizName || "");
  const localTime = Number(localStorage.getItem(KEYS.tickTiming) || 0);
  const [quizName, setQuizName] = useState(title || localTitle);
  const [timeLeft, setTimeLeft] = useState(timeExpired || localTime);
  const [timeDisplay, setTimeDisplay] = useState();

  useEffect(() => {
    const logicTimer = () => {
      if (timeLeft === 0) {
        // Logic when time has been over here
        toastConfirm("Time over!!!", "success");
        return;
      } else {
        setTimeLeft((prev) => prev - 1);
        localStorage.setItem(KEYS.tickTiming, timeLeft - 1);
        const time = GetReturnTime(timeLeft);
        setTimeDisplay(time);
      }
    };
    const timeOutId = setTimeout(logicTimer, 1000);
    return () => clearTimeout(timeOutId);
  }, [timeLeft]);

  useEffect(() => {
    localStorage.setItem(KEYS.quizName, quizName);
  }, [quizName]);

  return (
    <>
      <div className="header__menu">
        <span>
          <Link to={"/"}>
            <ArrowLeftOutlined style={{ fontSize: "18px", marginRight: 12 }} />
          </Link>
          <Text className="header__menu__title">{quizName}</Text>
        </span>
        <span className="time-box">
          <ClockCircleOutlined />
          {timeDisplay}
        </span>
      </div>
    </>
  );
};
