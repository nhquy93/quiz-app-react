import React from "react";
import "./Home.css";
import { Tabs, Row, Col, Typography } from "antd";
import QuizCard from "../../components/Quiz-Card/QuizCard";
import ContinueCard from "../../components/Continue-Card/ContinueCard";
import { useDispatch, useSelector } from "react-redux";

const { Title } = Typography;

export default function Home() {
  const quizzes = useSelector((state) => state.home.quizList);
  const dispatch = useDispatch();

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={quizzes.map((q) => ({
          ...q,
          label: q.label,
          children: (
            <Row gutter={{ xs: 2, sm: 4, md: 24, lg: 32 }}>
              {q.children.map((c, idx) => (
                <Col key={idx} className="gutter-row" xs={24} sm={12} md={8}>
                  <QuizCard
                    title={c.title}
                    total={c.total}
                    timeExpired={c.timeExpired}
                    rate={c.rate}
                  />
                </Col>
              ))}
            </Row>
          ),
        }))}
        centered
      />
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
