import { Breadcrumb} from 'antd'
import React, { useEffect } from 'react'
import { Typography} from 'antd';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';
import { useState } from 'react';
import { getCategories, newCatgeories } from '../category/categorySlice';
import '../../../../App.css';
import { TreeSelect } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;
let categoryId = {};
const NewSubCategoryPageManager = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onChange = value => {
    categoryId = value;
  };
  const navigate = useNavigate();
  const onSubmit = data =>{
    data = {...data,categoryId}
  
    dispatch(newCatgeories(data))
    .then(navigate('/admin/category'))
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
        value : category.idC,
        title :  category.name,
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
          <Title>Th??m m???i lo???i h??ng</Title>
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
            <Form.Item label="T??n">
              <input  {...register('name')} type="text" className='ant-input'
                      placeholder="Nh???p t??n lo???i ..."
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

export default NewSubCategoryPageManager