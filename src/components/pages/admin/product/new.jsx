import { Breadcrumb} from 'antd'
import React, { useEffect } from 'react'
import { Typography} from 'antd';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addProducts } from './productSlice';
import { Form } from 'antd';
import { useState } from 'react';
import { getCategories } from '../category/categorySlice';
import '../../../../App.css';
import { TreeSelect } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;
let category = {};
const NewProductPageManager = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onChange = value => {
    category = value;
  };
  const formData = new FormData();
  const API = 'https://api.cloudinary.com/v1_1/ph-th/image/upload';
  const preset = 'rjbb3yjz';

  let imgHide = document.querySelector('#imgHide');
  const onChangeImg = e => {
    imgHide.src = URL.createObjectURL(e.target.files[0])
    formData.append('file' , e.target.files[0] );
    formData.append('upload_preset', preset );
  }
  let img = {};
  const onSubmit = product =>{
    axios.post(API, formData)
    .then(data =>{
      img = data.data.url;
      product = {...product,category, img}
      dispatch(addProducts(product))
      .then(navigate("/admin/product" ))
    })
    
   
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


  
  const treeData1 = [
    categories.categoryList?.map((category) => {
      return {
        value : category._id,
        title :  category.name,
        children : category.children.map((children) => {
          return {
            value : children._id,
            title :  children.name,
          }
        })
      }
    })
  ]
  const treeData = treeData1[0];

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
          <h3 className="title-feat"><a href="/admin/product">Danh s??ch</a></h3>
          <Title>Th??m m???i s???n ph???m</Title>
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
            <Form.Item label="T??n">
              <input  {...register('name')} type="text" className='ant-input'
                      placeholder="Nh???p t??n s???n ph???m v??o ????y ..."
              />
            </Form.Item>

            <Form.Item label="Gi??">
              <input  {...register('price')} type="number" className='ant-input'
                        placeholder="Nh???p gi?? s???n ph???m v??o ????y ..."
              />
            </Form.Item>

            <Form.Item label="Khuy???n m??i">
              <input  {...register('sale')} type="number" className='ant-input'
                        placeholder="Nh???p khuy???n m??i s???n ph???m v??o ????y ..."
              />
            </Form.Item>
            <Form.Item label="H??nh ???nh">
              <input onChange={onChangeImg}   type="file" className='ant-input'
                        placeholder="Nh???p khuy???n m??i s???n ph???m v??o ????y ..."
              />
              <img width={50} class="w-20"
                                        id="imgHide" />
            </Form.Item>
            <Form.Item label="M?? t???">
              <textarea   {...register('desc')}className='ant-input'
                        placeholder="Nh???p m?? t??? s???n ph???m v??o ????y ...">
              </textarea>
            </Form.Item>
            <Form.Item label="Lo???i h??ng" rules={[{ required: true }]}>
              <TreeSelect
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="Nh???n v??o ????? ch???n lo???i h??ng"
                treeDefaultExpandAll
                onChange={onChange}
              />
            </Form.Item>
            
            <Form.Item {...buttonItemLayout}>
              <button className='ant-btn ant-btn-primary'>?????ng ??</button>
            </Form.Item>
          </Form>
        </div>
    </>
  )
}

export default NewProductPageManager