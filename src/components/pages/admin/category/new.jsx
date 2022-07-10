import { Breadcrumb} from 'antd'
import React from 'react'
import { Typography} from 'antd';
import { useForm } from "react-hook-form";
import { useDispatch} from 'react-redux';
import { Form } from 'antd';
import { useState } from 'react';
import {  newCatgeories } from '../category/categorySlice';
import '../../../../App.css';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;
const NewCategoryPageManager = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = data =>{
    data = {...data}
    dispatch(newCatgeories(data))
    .then( () => {
        navigate('/admin/category')
    })
  }
  
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 2,
          },
          wrapperCol: {
            span: 20,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null

  return (
    <>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <h3 className="title-feat"><a href="/admin/product">Danh sách</a></h3>
          <Title>Thêm mới loại hàng</Title>
          <Form
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{
              layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange}
            onFinish={handleSubmit(onSubmit)}
          >
            <Form.Item label="Tên">
              <input  {...register('name')} type="text" className='ant-input'
                      placeholder="Nhập tên loại ..."
              />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <button className='ant-btn ant-btn-primary'>Đồng ý</button>
            </Form.Item>
          </Form>
        </div>
    </>
  )
}

export default NewCategoryPageManager