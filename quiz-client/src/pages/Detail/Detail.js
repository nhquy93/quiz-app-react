import {
  ClockCircleOutlined,
  FileDoneOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Typography, Row, Col, Space, Avatar } from "antd";
import React from "react";
import "./Detail.css";
import StartButton from "../../components/Start-Button/StartButton";

const { Title, Text } = Typography;

export default function Detail() {
  const describes = [
    {
      title: "10 Question(s)",
      desc: "10 point for a correct answer",
      icon: <FileDoneOutlined />,
    },
    {
      title: "1 hour 15 mins",
      desc: "Total duration of the quiz",
      icon: <ClockCircleOutlined />,
    },
    {
      title: "10 Question(s)",
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
