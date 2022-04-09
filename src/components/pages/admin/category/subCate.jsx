import { Breadcrumb } from 'antd';
import '../../../../App.css';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table } from 'antd';
import { Typography} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategories, removeCategory } from './categorySlice';
const { Title } = Typography;

function SubCategoryPageManager() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = useSelector(data => data.category.value);

  useEffect(()=> {
    dispatch(getCategories());
  } , [dispatch])

  const {id} = useParams();
  const idParen = id;
  
   const newCategories =  categories.categoryList?.filter( category => category._id === idParen );

  

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
  const listCategory = newCategories[0].children?.map((category, index)=>{
    return {
      key: index,
      name : category.name,
      func : [
        <div className="site-button-ghost-wrapper" key={index}>
          <Button type="primary" ghost onClick={()=> navigate(`/admin/product/${category._id}/edit`)}>
            Sửa
          </Button>,
              <Button type="primary" danger ghost onClick={ () => dispatch(removeCategory({_id: category._id , _parenId : idParen})) }>
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
          <h3 className="title-feat"><a href="/admin/category/new">Thêm mới</a></h3>
          <Table dataSource={listCategory} columns={columns} />
        </div>
    </>
  )
}

export default SubCategoryPageManager