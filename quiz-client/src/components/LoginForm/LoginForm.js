import "./LoginForm.css";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Card } from "antd";

const { Item } = Form;

export function LoginForm({ onSubmit }) {
  const [form] = Form.useForm();
  return (
    <Card className="card-wrapper">
      <div className="form-title">
        Signin <br /> to access your team quiz
      </div>
      <div className="form-group">
        <Form size="large" onFinish={onSubmit}>
          <Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Invalid email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Item>
          <Item
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
              { min: 5, message: "Username must be minimum 5 characters." },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Item>
          <Item shouldUpdate>
            {() => (
              <Button
                style={{ minWidth: 174 }}
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Start Quiz
              </Button>
            )}
          </Item>
        </Form>
      </div>
    </Card>
  );
}
