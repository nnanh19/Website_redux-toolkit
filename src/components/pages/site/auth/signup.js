import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { signUp } from "../../admin/auth/authSlice";
const { Title } = Typography;
const SignUpPageSite = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFinish = (data) => {
    dispatch(signUp(data));
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 8 },
          wrapperCol: { span: 8 },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: { span: 8, offset: 8 },
        }
      : null;

  return (
    <div className="container">
      <div className="auth">
        <Title level={2}>Đăng ký</Title>
        <div className="auth-form">
          <Form form={form} onFinish={onFinish} {...formItemLayout}>
            <Form.Item
              name="username"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Bạn cần nhập username",
                },
              ]}
            >
              <Input placeholder="Nhập username vào đây ..." />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Bạn cần nhập email",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Nhập email vào đây ..." />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Bạn cần nhập password",
                },
              ]}
            >
              <Input.Password placeholder="Nhập password vào đây ..." />
            </Form.Item>

            <Form.Item {...buttonItemLayout}>
              <Button type="primary" htmlType="submit">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageSite;
