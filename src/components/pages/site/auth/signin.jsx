import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { signIn } from '../../admin/auth/authSlice';
import { useNavigate } from 'react-router-dom';
const { Title} = Typography;
const SignInPageSite = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [formLayout] = useState('horizontal');
    
    const onFinish = (data) => {
        dispatch(signIn(data))
        .then(()=>{
          navigate("/");
        })
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
    <div className='container'>
      <div className='auth'>
      <Title level={2}>Đăng nhập</Title>
        <div className='auth-form'>
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
                    
                   <div>
                   <br/>
                    <p>Nếu chưa có tài khoản. <a href="/signup">Nhấn vào đây để đăng ký</a></p>
                   </div>
                </Form.Item>
                </Form>
        </div>
      </div>
    </div>
  )
}

export default SignInPageSite;
