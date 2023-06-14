import React from "react";
import { Button } from "antd";
import "./StartButton.css";
import { useNavigate, useParams } from "react-router-dom";
import { toastConfirm } from "../../utils/sweet-alert";

export default function StartButton() {
  const { questionGroupId } = useParams();
  const navigate = useNavigate();

  const startHandler = () => {
    toastConfirm("Let's start your quiz", "info").then((res) => {
      if (res.isConfirmed) {
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
