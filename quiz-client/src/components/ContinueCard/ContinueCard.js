import { Row, Col, Typography, Card, Button, Space } from "antd";
import {
  ClockCircleOutlined,
  DeleteOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import React from "react";
import "./ContinueCard.css";

const { Text } = Typography;

export default function ContinueCard() {
  return (
    <Card
      style={{ border: 0, backgroundColor: "transparent", width: "100%" }}
      bodyStyle={{ margin: 0, padding: 0 }}
    >
      <Row>
        <Col className="continue-card__image" span={8}>
          <div></div>
        </Col>
        <Col className="continue-card__info" span={16}>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Row>
              <Col span={20}>
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
              <Col span={4} className="continue-card__remove">
                <DeleteOutlined />
              </Col>
            </Row>
            <Row wrap={false}>
              <Col flex="auto">
                <Button type="primary" className="continue-button">
                  Continue Quiz
                </Button>
              </Col>
            </Row>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}
