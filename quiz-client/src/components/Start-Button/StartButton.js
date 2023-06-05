import React from "react";
import { Button } from "antd";
import "./StartButton.css";
import { useNavigate } from "react-router-dom";

export default function StartButton() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/start")} className="start" type="primary">
      Start Quiz
    </Button>
  );
}
