import { Card, Col, Row, Typography, Space } from "antd";
import React from "react";
import "./QuizCard.css";
import {
  ClockCircleOutlined,
  FileTextOutlined,
  StarFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Time2String } from "../../utils/Time2String";

const { Text } = Typography;

export default function QuizCard({ title, total, timeExpired, rate }) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate("/detail")} className="quiz-card">
      <Row>
        <Col className="quiz-card__image" span={6}>
          <div></div>
        </Col>
        <Col className="quiz-card__info" span={12}>
          <Space direction="vertical">
            <Text className="title">{title}</Text>
            <Text className="questions" type="secondary">
              <FileTextOutlined /> {total} Questions
            </Text>
            <Text className="time" type="secondary">
              <ClockCircleOutlined /> {Time2String(timeExpired)}
            </Text>
          </Space>
        </Col>
        <Col className="quiz-card__rate" span={6}>
          <StarFilled /> {rate}
        </Col>
      </Row>
    </Card>
  );
}
