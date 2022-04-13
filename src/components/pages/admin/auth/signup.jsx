import React, { useState } from 'react'
import { Form } from 'antd';
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { useForm} from 'react-hook-form';
import { signUp } from './authSlice';
import axios from 'axios';
const { Title} = Typography;
const SignUpPageAdmin = () => {
    const dispatch = useDispatch();

    const [formLayout] = useState('horizontal');
    const { register, handleSubmit} = useForm();
    const formData = new FormData();
   const onChange  = async e =>{
       
       formData.append('file', e.target.files[0]);
       formData.append('upload_preset', preset);
       
    }

    const API = 'https://api.cloudinary.com/v1_1/ph-th/image/upload';
    const preset = 'rjbb3yjz';

    const onSubmit = async ()=> {
        const {data} = await axios.post(API, formData)
        console.log(data.url);
    }
 
    // const formItemLayout =
    // formLayout === 'horizontal'
    //   ? {
    //       labelCol: { span: 8 },
    //       wrapperCol: { span: 8 },
    //     }
    //   : null;
    
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 8, offset: 8 },
        }
      : null;
  return (
      <>
      <Title level={2}>Đăng ký</Title>
   <form action="" encType='multipart/form-data' method='post' onSubmit={handleSubmit(onSubmit)}  >
        <Form.Item label='Name' rules={[
            {
                required :true,
                message : 'Bạn cần nhập username'
            }
        ]}> 
            <input 
            className='ant-input' type="text" placeholder='Nhập username vào đây ...'/>
        </Form.Item>

        <Form.Item  label='Email'  rules={[
            {
                required :true,
                message : 'Bạn cần nhập email',
            }
        ]}> 
             <input 
            className='ant-input' type="text" placeholder='Nhập email vào đây ...'/>
        </Form.Item>

        <Form.Item onChange={onChange} >
            <input 
            className='ant-input' type="file"/>
        </Form.Item>

        <Form.Item  name='password' label='Password' rules={[
            {
                required :true,
                message : 'Bạn cần nhập password',
            }
        ]}> 
            <input 
            className='ant-input' type="text" placeholder='Nhập password vào đây ...'/>
        </Form.Item>

      

        <Form.Item {...buttonItemLayout}>
            <button className='btn btn-success'>Gửi</button>
        </Form.Item>
    </form>
    </>
  )
}

export default SignUpPageAdmin