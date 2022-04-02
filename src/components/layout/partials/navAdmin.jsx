import React from 'react'
import { Layout, Menu } from 'antd';
import {

    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  
import SubMenu from 'antd/lib/menu/SubMenu';
  const { Sider } = Layout;

const NavAdmin = () => {
  return (
    <Sider collapsible >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
        </Menu.Item> */}
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">1</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Product">
            <Menu.Item key="7"><a href="/admin/product">Danh sách</a></Menu.Item>
            <Menu.Item key="6"><a href="/admin/product/new">Thêm mới</a></Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
            Files
        </Menu.Item>
        </Menu>
    </Sider>
  )
}
export default NavAdmin;