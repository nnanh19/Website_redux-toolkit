import { Breadcrumb } from 'antd';
import '../../../../App.css';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table } from 'antd';
import { Typography} from 'antd';
import { useNavigate } from 'react-router-dom';
import { getUsers } from './authSlice';
const { Title } = Typography;
function UserPageManager() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector(data => data.auth.users);
  useEffect(()=> {
    dispatch(getUsers());
  } , [dispatch])
  console.log(users);
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
        title  : 'Mật khẩu',
        dataIndex : 'password',
      },
    {
      title  : 'Chức năng',
      dataIndex : 'func',
    }
  ];

    const listCategory = users?.map((user, index)=>{
      return {
        key: index,
        name : user.username,
        password : user.password,
        func : [
          <div className="site-button-ghost-wrapper" key={index}>
            <Button type="primary" ghost onClick={()=> navigate(`/admin/category/${user._id}`)}>
              Chi tiết
            </Button>,
            <Button type="primary" ghost onClick={()=> navigate(`/admin/category/${user._id}/edit`)}>
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
          <h3 className="title-feat"><a href="/admin/category/new">Thêm mới</a></h3>
          <Table dataSource={listCategory} columns={columns} />
        </div>
    </>
  )
}

export default UserPageManager