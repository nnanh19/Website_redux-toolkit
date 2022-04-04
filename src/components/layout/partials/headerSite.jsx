import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderSite = () => {
  return (

    <div className="container-custom">
        <div className="header">
            <div className="logo">
                <a href="/">Redux</a>
            </div>
           <div className='menu_'>
                <Menu  mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1"><Link to="/">Trang Chủ</Link></Menu.Item>
                <Menu.Item key="2" ><Link to="/product">Sản phẩm </Link> </Menu.Item>
                <Menu.Item key="3">Tin Tức</Menu.Item>
                <Menu.Item key="4">Liên Hệ</Menu.Item>
                </Menu>
           </div>
        </div>
    </div>

  )
}

export default HeaderSite