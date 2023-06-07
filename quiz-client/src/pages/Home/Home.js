import React, { useState } from "react";
import "./Home.css";
import { Tabs, Row, Col, Typography } from "antd";
import QuizCard from "../../components/Quiz-Card/QuizCard";
import ContinueCard from "../../components/Continue-Card/ContinueCard";
import { useSelector } from "react-redux";

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
  debugger;
  const topicList = useSelector((store) => store.topicsSlice.topicList);
  const [items1, setItems] = useState([]);

  const topics = topicList.map(({ id, name, questionGroups }) => ({
    key: id,
    label: name,
    children: questionGroups,
  }));

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={topics.map((q) => ({
          ...q,
          label: q.label,
          children: (
            <Row gutter={{ xs: 2, sm: 4, md: 24, lg: 32 }}>
              {q.children.map((c) => (
                <Col key={c.id} className="gutter-row" xs={24} sm={12} md={8}>
                  <QuizCard
                    title={c.name}
                    total={"123"}
                    timeExpired={123}
                    rate={1}
                  />
                </Col>
              ))}
            </Row>
          ),
        }))}
        centered
      />
      {/* <div className="resume-container">
        <Title level={4} style={{ margin: "12px 0" }}>
          Continue Quiz
        </Title>
        <Row>
          <Col xs={24} sm={12} md={8}>
            <ContinueCard />
          </Col>
        </Row>
      </div> */}
    </>
  );
}
