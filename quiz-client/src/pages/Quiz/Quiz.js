import { Avatar, Button, List, Tabs, Typography } from "antd";
import { React, useEffect, useState } from "react";
import "./Quiz.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAnswered } from "../../store/answered/answered-slice";
import { toastConfirm } from "../../utils/sweet-alert";
import { QuestionGroupAPI } from "../../api/question-group-api";

const { Title, Text } = Typography;
const { Item } = List;

export default function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questionGroupId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [tabActive, setTabActive] = useState(1);
  const answeredList = useSelector((store) => store.answeredSlice.answeredList);

  const fetchQuizById = async () =>
    await QuestionGroupAPI.fetchQuestionsById(questionGroupId);

  useEffect(() => {
    let _questions = [];
    fetchQuizById()
      .then((res) => {
        _questions = res?.questions?.map((e, idx) => {
          return {
            key: (idx + 1).toString(),
            label: (idx + 1).toString(),
            children: [
              {
                id: e.id,
                answer: e.answer,
                question: e.name,
                answers: [...e.answerList].filter((x) => x !== ""),
              },
            ],
          };
        });
        setQuestions(_questions);
      })
      .catch((err) => {
        if (err.statusCode === 404) {
          window.location.href = "/404";
          return;
        }
      });
  }, []);

  useEffect(() => {
    window.onbeforeunload = () => true;
    return 
  }, []);

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
        centered
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
    <div className="wrapper">
      <div className="wrapper-content">
        <Title id={`question__${id}`} style={{ marginTop: 12 }} level={5}>
          {question}
        </Title>
        <List
          dataSource={answers}
          renderItem={(e, idx) => (
            <Item
              key={idx}
              id={`answer__${idx}`}
              style={{ cursor: "pointer" }}
              onClick={() => hdlClick({ id, answer, idx })}
            >
              <Item.Meta
                avatar={
                  <Avatar className={idx === selectAnswer ? "active" : ""}>
                    {String.fromCharCode(65 + idx)}
                  </Avatar>
                }
                description={
                  <Text
                    style={{ color: idx === selectAnswer ? "#008bff" : "" }}
                  >
                    {e}
                  </Text>
                }
              />
            </Item>
          )}
        />
      </div>
    </div>
  );
}
