import React from "react";
import { Button } from "antd";
import "./StartButton.css";
import { useNavigate, useParams } from "react-router-dom";

export default function StartButton() {
  const { questionGroupId } = useParams();
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(`/start/${questionGroupId}`)} id="startBtn" className="start" type="primary">
      Start Quiz
    </Button>
  );
}
