import React from 'react'
import { Layout} from 'antd';
import { Outlet } from 'react-router-dom';
import NavAdmin from './partials/navAdmin';
import FooterAdmin from './partials/footerAdmin';

const { Header, Content} = Layout;

const AdminLayout = () => {
  return (
      <Layout style={{ minHeight: '100vh' }}>
        <NavAdmin />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Outlet />
          </Content>
          <FooterAdmin />
        </Layout>
      </Layout>
  )
}

export default AdminLayout