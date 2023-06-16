import React, { useEffect } from "react";
import { Tabs, Row, Col, Skeleton } from "antd";
import QuizCard from "../../components/QuizCard/QuizCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTopics } from "../../api/topicApi";
import { topicsSelector } from "../../store/features/topicsSlice";
import "./Home.css";
import { searchSelector } from "../../store/features/utilSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { topics, isLoading } = useSelector(topicsSelector);
  const searchItem = useSelector(searchSelector);

  useEffect(() => {
    dispatch(fetchAllTopics());
  }, []);

  const dataMapped = (topics || []).map(({ id, name, questionGroups }) => ({
    key: id,
    label: name,
    children: [...questionGroups].filter((x) =>
      x.name.trim().toUpperCase().includes(searchItem.trim().toUpperCase())
    ),
  }));

  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Tabs
          defaultActiveKey="1"
          items={dataMapped.map((q) => ({
            ...q,
            label: q.label,
            children: (
              <Row gutter={{ xs: 2, sm: 4, md: 24, lg: 32 }}>
                {q.children.map((c) => (
                  <Col key={c.id} className="gutter-row" xs={24} sm={12} md={8}>
                    <QuizCard
                      id={c.id}
                      title={c.name}
                      total={c.totalQuestion}
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
      )}
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
