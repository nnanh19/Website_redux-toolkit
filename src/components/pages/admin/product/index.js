import { Breadcrumb } from 'antd'
import React from 'react'
function ProductPageManager() {
  return (
      <>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
        </div>
    </>
  )
}

export default ProductPageManager