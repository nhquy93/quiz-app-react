import {
  ClockCircleOutlined,
  FileDoneOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Typography, Row, Col, Space, Avatar } from "antd";
import React from "react";
import "./Detail.css";
import StartButton from "../../components/Start-Button/StartButton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Time2String } from "../../utils/Time2String";

const { Title, Text } = Typography;

export default function Detail() {
  const { questionGroupId } = useParams();

  const topicList = useSelector((store) => store.topicsSlice.topicList);

  let questionGroup = {};
  topicList.forEach((groups) => {
    const item = groups.questionGroups.find((x) => x.id === questionGroupId);
    if (item) {
      questionGroup = { ...item };
      return questionGroup;
    }
  });

  const describes = [
    {
      title: `${questionGroup.total} Question(s)`,
      desc: "10 point for a correct answer",
      icon: <FileDoneOutlined />,
    },
    {
      title: `${Time2String(questionGroup.timeExpired)}`,
      desc: "Total duration of the quiz",
      icon: <ClockCircleOutlined />,
    },
    {
      title: `Win ${questionGroup.total} star`,
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
      <div className="sticky-button">
        <StartButton />
      </div>
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
