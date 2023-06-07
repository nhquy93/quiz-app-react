import { Avatar, Button, List, Tabs, Typography } from "antd";
import { React, useState } from "react";
import "./Quiz.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Item } = List;

export default function Quiz() {
  const questions = [
    {
      key: "1",
      label: "1",
      children: [
        {
          question: "Question 1",
          answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        },
      ],
    },
    {
      key: "2",
      label: "2",
      children: [
        {
          question: "Question 2",
          answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
        },
      ],
    },
  ];
  const [tabActive, setTabActive] = useState(1);

  const hdlTabClick = (tabNodeKey) => {
    setTabActive(tabNodeKey);
};
  const hdlBack = () => {
    if (+tabActive === 1) return;
    setTabActive((prevState) => prevState - 1);
  };
  const hdlNext = () => {
    if (+tabActive === questions.length) return;
    setTabActive((prevState) => prevState + 1);
  };

  /// Selected Answer
  const hdlSelectedOpt = (e) => console.log(e);

  return (
    <>
      <Tabs
        items={questions.map((q, idx) => ({
          ...q,
          label: (
            <Avatar className={idx === tabActive - 1 ? "active" : ""}>
              {q.label}
            </Avatar>
          ),
          children: q.children.map((c) => (
            <SelectionListLayout
              question={c.question}
              answers={c.answers}
              selectedOpt={hdlSelectedOpt}
            />
          )),
        }))}
        activeKey={tabActive.toString()}
        defaultActiveKey="1"
        onTabClick={hdlTabClick}
      />
      <div className="submit-quiz">
        <Avatar
          onClick={hdlBack}
          className={+tabActive === 1 ? "" : "active"}
          style={{ cursor: "pointer", marginRight: 24 }}
          size={40}
          icon={<LeftOutlined />}
        />
        <Button type="default" onClick={() => {}}>
          Submit Quiz
        </Button>
        <Avatar
          onClick={hdlNext}
          className={+tabActive === questions.length ? "" : "active"}
          style={{ cursor: "pointer", marginLeft: 24 }}
          size={40}
          icon={<RightOutlined />}
        />
      </div>
    </>
  );
}

function SelectionListLayout({ question, answers, selectedOpt }) {
  const [selectAnswer, setSelectAnswer] = useState(null);
  const hdlClick = (selected) => {
    setSelectAnswer(selected);
    selectedOpt(selected);
  };
  return (
    <>
      <Title style={{ marginTop: 12 }} level={5}>
        {question}
      </Title>
      <List
        dataSource={answers}
        renderItem={(e, idx) => (
          <Item key={idx} onClick={() => hdlClick(idx)}>
            <Item.Meta
              avatar={
                <Avatar className={idx === selectAnswer ? "active" : ""}>
                  {String.fromCharCode(65 + idx)}
                </Avatar>
              }
              description={
                <Text style={{ color: idx === selectAnswer ? "#008bff" : "" }}>
                  {e}
                </Text>
              }
            />
          </Item>
        )}
      ></List>
    </>
  );
}
