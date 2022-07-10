import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { signIn } from './authSlice';
const { Title} = Typography;
const SignInPageAdmin = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [formLayout] = useState('horizontal');
    
    const onFinish = (data) => {
        dispatch(signIn(data))
    }
    const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 8 },
          wrapperCol: { span: 8 },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 8, offset: 8 },
        }
      : null;
    
  return (
      <>
      <Title level={2}>Đăng nhập</Title>
    <Form form={form} onFinish={onFinish} {...formItemLayout}>

        <Form.Item name='email' label='Email' rules={[
            {
                required :true,
                message : 'Bạn cần nhập email',
                type : 'email'
            }
        ]}> 
            <Input placeholder='Nhập email vào đây ...'/>
        </Form.Item>

        <Form.Item  name='password' label='Password' rules={[
            {
                required :true,
                message : 'Bạn cần nhập password',
            }
        ]}> 
            <Input.Password placeholder='Nhập password vào đây ...'/>
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
            <Button type='primary' htmlType='submit'>
                Đăng nhập
            </Button>
        </Form.Item>
    </Form>
    </>
  )
}

export default SignInPageAdmin;
