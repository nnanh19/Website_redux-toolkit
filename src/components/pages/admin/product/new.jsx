import { Breadcrumb} from 'antd'
import React, { useEffect } from 'react'
import { Typography} from 'antd';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from './productSlice';
import { Form } from 'antd';
import { useState } from 'react';
import { getCategories } from '../category/categorySlice';
import '../../../../App.css'
const { Title } = Typography;

const NewProductPageManager = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    dispatch(addProducts(data));
  }
  
  const categories = useSelector(data => data.category.value);
  
  useEffect(()=> {
    dispatch(getCategories());
  } , [dispatch])

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
          <Title>Thêm mới sản phẩm</Title>
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
                      placeholder="Nhập tên sản phẩm vào đây ..."
              />
            </Form.Item>

            <Form.Item label="Giá">
              <input  {...register('price')} type="number" className='ant-input'
                        placeholder="Nhập giá sản phẩm vào đây ..."
              />
            </Form.Item>

            <Form.Item label="Khuyến mãi">
              <input  {...register('sale')} type="number" className='ant-input'
                        placeholder="Nhập khuyến mãi sản phẩm vào đây ..."
              />
            </Form.Item>
            <Form.Item label="Mô tả">
              <textarea   {...register('desc')}className='ant-input'
                        placeholder="Nhập mô tả sản phẩm vào đây ...">
              </textarea>
            </Form.Item>
            {/* <Form.Item label="Chọn loại hàng" rules={[{ required: true }]}>
              <select className='ant-input' {...register('category')}>
                {categories?.map((category,index)=> 
                <option key={index} value={category._id} 
                        className='ant-input' >{category.name}
                </option>)}
              </select>
            </Form.Item> */}
            
            <Form.Item {...buttonItemLayout}>
              <button className='ant-btn ant-btn-primary'>Đồng ý</button>
            </Form.Item>
          </Form>
        </div>
    </>
  )
}

export default NewProductPageManager