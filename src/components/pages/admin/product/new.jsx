import { Breadcrumb } from 'antd'
import React from 'react'
import { Typography} from 'antd';
const { Title } = Typography;

const NewProductPageManager = () => {
  return (
    <>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Title>Thêm mới sản phẩm</Title>
          <h3 className="title-feat"><a href="/admin/product">Danh sách</a></h3>
      
        </div>
    </>
  )
}

export default NewProductPageManager