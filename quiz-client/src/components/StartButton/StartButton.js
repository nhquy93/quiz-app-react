import React from "react";
import { Button } from "antd";
import "./StartButton.css";
import { useNavigate, useParams } from "react-router-dom";
import { toastConfirm } from "../../utils/sweet-alert";
import { KEYS } from "../../constants/keys.constant";

export default function StartButton() {
  const { questionGroupId } = useParams();
  const navigate = useNavigate();

  const startHandler = () => {
    toastConfirm("Let's start your quiz", "info").then((res) => {
      if (res.isConfirmed) {
        Object.values(KEYS).forEach((key) => {
          localStorage.removeItem(key);
        })
        navigate(`/start/${questionGroupId}`);
      }
      return;
    });
  };
  return (
    <Button
      onClick={startHandler}
      id="startBtn"
      className="start"
      type="primary"
    >
      Start Quiz
    </Button>
  );
}
