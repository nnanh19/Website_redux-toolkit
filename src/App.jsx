import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  Routes,
  Route,
} from "react-router-dom";
import SiteLayout from './components/layout/siteLayout';
import HomePage from './components/pages/site/homepage';
import ProductPage from './components/pages/site/product';
import Detail from './components/pages/site/product/detail';
import AdminLayout from './components/layout/adminLayout';
import DashboardPage from './components/pages/admin/dashboard';
import ProductPageManager from './components/pages/admin/product';
import NewProductPageManager from './components/pages/admin/product/new';
import EditProductManager from './components/pages/admin/product/edit';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<SiteLayout />}>
              <Route index element={<HomePage />}/>
              <Route path="product">
                <Route index element={<ProductPage />}/>
                <Route path='detail'  element={<Detail />}/>
              </Route>
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
              <Route index  element={<DashboardPage />}/>
              <Route path="product" element={<ProductPageManager />}/>
              <Route path="product/new" element={<NewProductPageManager /> }/>
              <Route path="product/:id/edit" element={<EditProductManager /> }/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
