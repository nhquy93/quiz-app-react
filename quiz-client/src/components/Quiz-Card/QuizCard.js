import { Card, Col, Row, Typography, Space } from "antd";
import React from "react";
import "./QuizCard.css";
import {
  ClockCircleOutlined,
  FileTextOutlined,
  StarFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

export default function QuizCard() {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate("/detail")} className="quiz-card">
      <Row>
        <Col className="quiz-card__image" span={6}>
          <div></div>
        </Col>
        <Col className="quiz-card__info" span={12}>
          <Space direction="vertical">
            <Text className="title">UI UX Design</Text>
            <Text className="questions" type="secondary">
              <FileTextOutlined /> {10} Questions
            </Text>
            <Text className="time" type="secondary">
              <ClockCircleOutlined /> 1 hour 15 mins
            </Text>
          </Space>
        </Col>
        <Col className="quiz-card__rate" span={6}>
          <StarFilled /> {4.8}
        </Col>
      </Row>
    </Card>
  );
}
