import { Breadcrumb, TreeSelect} from 'antd'
import React, { useEffect } from 'react'
import { Typography} from 'antd';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';
import { useState } from 'react';
import { getCategories, getCategory, updateCategory } from '../category/categorySlice';
import '../../../../App.css';
import { useNavigate, useParams } from 'react-router-dom';
const { Title } = Typography;
let categoryId = {};
const EditSubCategoryPageManager = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit , reset} = useForm();
  const navigate = useNavigate();
  const {id} = useParams();


  const onChange = value => {
    categoryId = value;
    console.log(categoryId);
  };
  const onSubmit = category =>{
    category = {...category,categoryId}
    dispatch(updateCategory(category))
    .then( navigate(`/admin/category`) )
  }
  
  const category = useSelector(data => data.category.subCategory);
  console.log(category);

  const categories = useSelector(data => data.category.value);
  console.log('cate',categories);
  const treeData1 = [
    categories.categoryList?.map((category) => {
      return {
        value : category.idC,
        title :  category.name,
      }
    })
  ]
  const treeData = treeData1[0];

  useEffect(()=> {
    reset(category);
  } , [reset,category])

  useEffect(()=> {
    dispatch(getCategory(id));
  } , [dispatch,id])

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
          <Title>Update loại hàng</Title>
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
            <Form.Item label="Loại hàng" rules={[{ required: true }]}>
              <TreeSelect
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="Đổi loại hàng"
                treeDefaultExpandAll
                onChange={onChange}
              />
            </Form.Item>
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

export default EditSubCategoryPageManager