import { Breadcrumb, TreeSelect} from 'antd'
import React, { useEffect } from 'react'
import { Typography} from 'antd';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { detailProduct, updateProduct } from './productSlice';
import { Form } from 'antd';
import { useState } from 'react';
import { getCategories } from '../category/categorySlice';
import '../../../../App.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;
let category = {};
const EditProductManager = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit , reset } = useForm();
  const onChange = value => {
    category = value;
    console.log(category);
  };
  const onSubmit = data =>{
    data = {...data,category}
    dispatch(updateProduct(data))
    .then(()=>  navigate("/admin/product" )
    )
  }
  const categories = useSelector(data => data.category.value);


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

  const {id} = useParams();
  const product = useSelector( data => data.product.detail);

  categories.categoryList?.map( (item) => { 
    const categoryName = item.children.filter(category => category._id === product.category)
    if(categoryName.length > 0){
      category = categoryName[0];
    }
  })
  useEffect(()=>{
      reset(product);
  }, [product, reset])

  useEffect( () => {
      dispatch(detailProduct(id));
  }, [dispatch, id])

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
          <Title>Cập nhật sản phẩm</Title>
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
            <Form.Item label="Loại hàng" rules={[{ required: true }]}>
              <TreeSelect
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder={category.name}
                treeDefaultExpandAll
                onChange={onChange}
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

export default EditProductManager