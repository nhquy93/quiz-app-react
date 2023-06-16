import { Avatar, Button, List, Skeleton, Tabs, Typography } from "antd";
import { React, useEffect, useState } from "react";
import "./Quiz.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toastConfirm } from "../../utils/sweet-alert";
import { KEYS } from "../../constants/keys.constant";
import { fetchQuestionsById } from "../../api/questionGroupApi";
import { authSelector } from "../../store/features/authSlice";
import { detailSelector } from "../../store/features/detailSlice";
import { addAnswered, resultSelector } from "../../store/features/resultSlice";
import { postResult } from "../../api/participantResultApi";

const { Title, Text } = Typography;
const { Item } = List;

export default function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questionGroupId } = useParams();
  const { auth } = useSelector(authSelector);
  const { questions, isLoading } = useSelector(detailSelector);
  const { answeredList, isSuccess } = useSelector(resultSelector);
  const localActiveQuestion = localStorage.getItem(KEYS.activeQuestion);
  const [quiz, setQuiz] = useState([]);
  const [tabActive, setTabActive] = useState(localActiveQuestion || 1);

  useEffect(() => {
    dispatch(fetchQuestionsById(questionGroupId));
  }, []);

  useEffect(() => {
    let _questions = [];
    /// Map model for component ant-tab
    _questions = questions?.questions?.map((e, idx) => {
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
    setQuiz(_questions);
  }, [questions]);

  useEffect(() => {
    if (!isSuccess) return;
    navigate("/");
  }, [isSuccess]);

  const hdlTabClick = (tabNodeKey) => {
    setTabActive((prevState) => {
      localStorage.setItem(KEYS.activeQuestion, Number(tabNodeKey));
      return (prevState = Number(tabNodeKey));
    });
  };

  const hdlBack = () => {
    if (+tabActive === 1) return;
    setTabActive((prevState) => {
      localStorage.setItem(KEYS.activeQuestion, Number(prevState - 1));
      return prevState - 1;
    });
  };
  const hdlNext = () => {
    if (+tabActive === questions.length) return;
    setTabActive((prevState) => {
      localStorage.setItem(KEYS.activeQuestion, Number(prevState + 1));
      return prevState + 1;
    });
  };

  const onSubmitQuiz = () => {
    let score = 0;
    answeredList.map((item) => {
      if (item.answer === item.idx + 1) score += 1;
      return score;
    });
    toastConfirm(
      `Your score: ${score}/${answeredList.length}`,
      "success"
    ).finally(() => {
      const payload = {
        score: score,
        participantId: auth.user.id,
        questionGroupId: questionGroupId,
        isFinish: true,
        timeTaken: Number(localStorage.getItem(KEYS.tickTiming) || 0),
      };
      dispatch(postResult({ ...payload }));
    });
  };

  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Tabs
          items={quiz?.map((q, idx) => ({
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
                selectedOpt={(e) => dispatch(addAnswered({ ...e }))}
              />
            )),
          }))}
          activeKey={`${tabActive || 1}`}
          defaultActiveKey="1"
          onTabClick={hdlTabClick}
          centered
        />
      )}
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
          className={+tabActive === quiz?.length ? "" : "active"}
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

  useEffect(() => {
    const localSelectedOpts = localStorage.getItem(KEYS.selectedOpts);
    if (!localSelectedOpts) return;
    const findAnswer = (JSON.parse(localSelectedOpts) || []).find(
      (x) => x.id === id
    );
    if (findAnswer) {
      setSelectAnswer(findAnswer.idx);
    }
  }, [id]);

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <Title id={`question__${id}`} level={3}>
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
