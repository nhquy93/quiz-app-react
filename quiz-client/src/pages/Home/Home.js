import "./Home.css";
import { Tabs, Row, Col } from "antd";
import QuizCard from "../../components/QuizCard/QuizCard";
import { useSelector } from "react-redux";

export default function Home() {
  const topicList = useSelector((store) => store.topicsSlice.topicList);

  const searchItems = useSelector((store) => store.utilsSlice.searchItem);

  const topics = topicList.map(({ id, name, questionGroups }) => ({
    key: id,
    label: name,
    children: [...questionGroups].filter((x) =>
      x.name.trim().toUpperCase().includes(searchItems.trim().toUpperCase())
    ),
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
