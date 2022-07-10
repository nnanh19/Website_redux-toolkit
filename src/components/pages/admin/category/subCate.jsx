import { Breadcrumb } from 'antd';
import '../../../../App.css';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table } from 'antd';
import { Typography} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { getSubCategories, removeCategory } from './categorySlice';
const { Title } = Typography;
function SubCategoryPageManager() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = useSelector(data => data.category.subCate);

  const {id} = useParams();
  const idParen = id;

  useEffect(()=> {
    dispatch(getSubCategories(idParen));
  } , [dispatch, idParen])
   
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
  const listCategory = categories.map((category, index)=>{
    return {
      key: index,
      name : category.name,
      func : [
        <div className="site-button-ghost-wrapper" key={index}>
          <Button type="primary" ghost onClick={()=> navigate(`/admin/category/${category._id}/editsub`)}>
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
          <h3 className="title-feat"><a href='#' onClick={ () => navigate(`/admin/category/newsub/${id}`)}>Thêm mới</a></h3>
          <Table dataSource={listCategory} columns={columns} />
        </div>
    </>
  )
}

export default SubCategoryPageManager