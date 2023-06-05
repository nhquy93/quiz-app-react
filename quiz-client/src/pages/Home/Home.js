import React from "react";
import "./Home.css";
import { Tabs, Row, Col, Typography } from "antd";
import QuizCard from "../../components/Quiz-Card/QuizCard";
import ContinueCard from "../../components/Continue-Card/ContinueCard";

const { Title } = Typography;

const items = [
  {
    key: "1",
    label: "Popular",
    children: (
      <>
        <Row gutter={{ xs: 2, sm: 4, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={24} sm={12} md={8}>
            <QuizCard />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={8}>
            <QuizCard />
          </Col>
        </Row>
      </>
    ),
  },
  {
    key: "2",
    label: "Science",
    children: "Content Tab Science",
  },
  {
    key: "3",
    label: "Mathematic",
    children: "Content Tab Mathematic",
  },
  {
    key: "4",
    label: "Computer",
    children: "Content Tab Computer",
  },
];

export default function Home() {
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} centered />
      <div className="resume-container">
        <Title level={4} style={{ margin: "12px 0" }}>
          Continue Quiz
        </Title>
        <Row>
          <Col xs={24} sm={12} md={8}>
            <ContinueCard />
          </Col>
        </Row>
      </div>
    </>
  );
}
