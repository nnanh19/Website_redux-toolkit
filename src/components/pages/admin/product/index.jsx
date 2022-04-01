import { Breadcrumb } from 'antd'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {  getProducts } from './productSlice';
import { Button, Table } from 'antd';

function ProductPageManager() {
  const products = useSelector(data => data.product.value);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getProducts());
  } , [])

  const columns = [
    {
      title  : 'stt',
      dataIndex : 'key',
    },
    {
      title  : 'Tên',
      dataIndex : 'name',
    },
    {
      title  : 'Mô tả',
      dataIndex : 'desc',
    },
    {
      title  : 'Ảnh',
      dataIndex : 'img',
    },
    {
      title  : 'Giá',
      dataIndex : 'price',
    },
    {
      title  : 'Khuyến mãi',
      dataIndex : 'sale',
    },
    {
      title  : 'Chức năng',
      dataIndex : 'func',
    }
  ];
 
  const listProduct = products?.map((product, index)=>{
    return {
      key: index,
      name : product.name,
      desc : product.desc,
      img : <img src={product.img} width={70} alt="" />,
      price : product.price,
      sale : product.sale,
      func : [
        <div className="site-button-ghost-wrapper" key={index}>
          <Button type="primary" ghost >
            Sửa
          </Button>,

              <Button type="primary" danger ghost>
            Xóa
          </Button>
        </div>
      ],
    }
  });
  return (
      <>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          

        <Table dataSource={listProduct} columns={columns} />;
        </div>
    </>
  )
}

export default ProductPageManager