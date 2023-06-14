import { Avatar, Button, List, Tabs, Typography } from "antd";
import { React, useState } from "react";
import "./Quiz.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAnswered } from "../../store/answered/answered-slice";
import { toastConfirm } from "../../utils/sweet-alert";

const { Title, Text } = Typography;
const { Item } = List;

export default function Quiz() {
  const { questionGroupId } = useParams();
  const dispatch = useDispatch();
  const topicList = useSelector((store) => store.topicsSlice.topicList);
  const answeredList = useSelector((store) => store.answeredSlice.answeredList);

  let questionGroup = {};
  topicList.forEach((groups) => {
    const item = groups.questionGroups.find((x) => x.id === questionGroupId);
    if (item) {
      questionGroup = { ...item };
      localStorage.setItem("timeExpired", questionGroup.timeExpired);
      return questionGroup;
    }
  });

  const questions = [];
  questionGroup?.questions?.map((item, index) => {
    questions.push({
      key: (index + 1).toString(),
      label: (index + 1).toString(),
      children: [
        {
          id: item.id,
          answer: item.answer,
          question: item.name,
          answers: [...item.answerList].filter((x) => x !== ""),
        },
      ],
    });
    return questions;
  });

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
  const hdlSelectedOpt = (e) => {
    dispatch(addAnswered({ ...e }));
  };

  const onSubmitQuiz = () => {
    let score = 0;
    answeredList.map((item) => {
      if (item.answer === item.idx + 1) {
        score += 1;
      }
      return score;
    });
    toastConfirm(`Your score: ${score}/${answeredList.length}`, "success");
  };

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
          children: q.children.map((c, idx) => (
            <SelectionListLayout
              key={idx}
              id={c.id}
              answer={c.answer}
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
        <Button type="default" onClick={onSubmitQuiz}>
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

function SelectionListLayout({ id, answer, question, answers, selectedOpt }) {
  const [selectAnswer, setSelectAnswer] = useState(null);
  const hdlClick = (selected) => {
    setSelectAnswer(selected.idx);
    selectedOpt(selected);
  };

  return (
    <>
      <Title id={`question__${id}`} style={{ marginTop: 12 }} level={5}>
        {question}
      </Title>
      <List
        dataSource={answers}
        renderItem={(e, idx) => (
          <Item
            key={idx}
            id={`answer__${idx}`}
            onClick={() => hdlClick({ id, answer, idx })}
          >
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
