import { Breadcrumb } from 'antd'
import React from 'react'


const DashboardPage = () => {
  return (
    <>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Dashboard
        </div>
    </>
  )
}

export default DashboardPage