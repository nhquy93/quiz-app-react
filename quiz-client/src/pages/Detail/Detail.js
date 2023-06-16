import {
  ClockCircleOutlined,
  FileDoneOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Typography, Row, Col, Space, Avatar, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import "./Detail.css";
import StartButton from "../../components/StartButton/StartButton";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Time2String } from "../../utils/Time2String";
import {
  detailSelector,
  getQuizDetail,
} from "../../store/features/detailSlice";
import { fetchQuestionGroupById } from "../../api/questionGroupApi";

const { Title, Text } = Typography;

export default function Detail() {
  const dispatch = useDispatch();
  const { questionGroupId } = useParams();
  const { detail, isLoading } = useSelector(detailSelector);

  useEffect(() => {
    dispatch(fetchQuestionGroupById(questionGroupId));
  }, []);

  const describes = [
    {
      title: `${detail?.totalQuestion || 0} Question(s)`,
      desc: "10 point for a correct answer",
      icon: <FileDoneOutlined />,
    },
    {
      title: `${Time2String(detail?.timeExpired || 0)}`,
      desc: "Total duration of the quiz",
      icon: <ClockCircleOutlined />,
    },
    {
      title: `Win 5 star`,
      desc: "Answer all questions correctly",
      icon: <StarOutlined />,
    },
  ];

  const guides = [
    "10 point to awarded for a correct answer and no marks for a incorrect answer.",
    "Click on options to select the correct answer.",
    "Click submit if you are sure you want to complete all the quizzes.",
  ];
  return (
    <div className="content-wrapper">
      {isLoading ? (
        <Skeleton active />
      ) : (
        <div className="detail-content">
          <Title level={5}>Brief explanation about this quiz</Title>
          {describes.map((e, idx) => (
            <LayoutGuideline
              key={idx}
              title={e.title}
              desc={e.desc}
              icon={e.icon}
            />
          ))}
          <Title level={5}>
            Please read the text below carefully so you can understand it
          </Title>
          <ul className="list-guides">
            {guides.map((e, idx) => (
              <li key={idx}>
                <Text>{e}</Text>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isLoading ? (
        <Skeleton.Button active />
      ) : (
        <div className="sticky-button">
          <StartButton />
        </div>
      )}
    </div>
  );
}

const LayoutGuideline = ({ title, desc, icon }) => (
  <Row style={{ marginBottom: "12px" }}>
    <Col flex="none">
      <Avatar
        size="large"
        style={{ backgroundColor: "#333", color: "#fff" }}
        icon={icon}
      ></Avatar>
    </Col>
    <Col flex="none" span={20} style={{ marginLeft: "10px" }}>
      <Space size={0} direction="vertical">
        <Text strong>{title}</Text>
        <Text type="secondary">{desc}</Text>
      </Space>
    </Col>
  </Row>
);
