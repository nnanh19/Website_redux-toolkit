import { Breadcrumb } from 'antd';
import '../../../../App.css';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table } from 'antd';
import { Typography} from 'antd';
import { useNavigate } from 'react-router-dom';
import { getCategories } from './categorySlice';
const { Title } = Typography;

function CategoryPageManager() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = useSelector(data => data.category.value);
  useEffect(()=> {
    dispatch(getCategories());
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
      title  : 'Chức năng',
      dataIndex : 'func',
    }
  ];
  const listCategory = categories.categoryList?.map((category, index)=>{
    return {
      key: index,
      name : category.name,
      func : [
        <div className="site-button-ghost-wrapper" key={index}>
          <Button type="primary" ghost onClick={()=> navigate(`/admin/category/${category._id}`)}>
            Chi tiết
          </Button>,
          <Button type="primary" ghost onClick={()=> navigate(`/admin/product/${category._id}/edit`)}>
            Sửa
          </Button>,
              <Button type="primary" danger ghost >
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
          <Table dataSource={listCategory} columns={columns} />
        </div>
    </>
  )
}

export default CategoryPageManager