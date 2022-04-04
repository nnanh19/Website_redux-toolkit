import { Breadcrumb } from 'antd';
import '../../../../App.css';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {  getProducts, removeProduct } from './productSlice';
import { Button, Table } from 'antd';
import { Typography} from 'antd';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

function ProductPageManager() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector(data => data.product.value);
  useEffect(()=> {
    dispatch(getProducts());
  } , [dispatch])

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
          <Button type="primary" ghost onClick={()=> navigate(`/admin/product/${product._id}/edit`)}>
            Sửa
          </Button>,
              <Button type="primary" danger ghost onClick={()=> dispatch(removeProduct(product._id))}>
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
          <Title>Danh sách sản phẩm</Title>
          <h3 className="title-feat"><a href="/admin/product/new">Thêm mới</a></h3>
          <Table dataSource={listProduct} columns={columns} />
        </div>
    </>
  )
}

export default ProductPageManager