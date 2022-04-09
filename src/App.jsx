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
import SignUpPageAdmin from './components/pages/admin/auth/signup';
import SignInPageAdmin from './components/pages/admin/auth/signin';
import { PrivateRouteIsAdmin, PrivateRouteIsAuth } from './utils/localStorage';
import SignInPageSite from './components/pages/site/auth/signin';
import SignUpPageSite from './components/pages/site/auth/signup';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<SiteLayout />}>
              <Route index element={<HomePage />}/>
              <Route path="product">
                <Route index element={<ProductPage />}/>
                <Route path=':id'  element={<Detail />}/>
              </Route>
              <Route path="signup" element={<SignUpPageSite /> }/>
              <Route path="signin" element={<SignInPageSite /> }/>
          </Route>
          <Route  path='/admin'  element={<AdminLayout />}>
              <Route  index  element={
                <PrivateRouteIsAuth>
                  <PrivateRouteIsAdmin>
                    <DashboardPage />
                  </PrivateRouteIsAdmin>
                </PrivateRouteIsAuth>}
              />
              <Route path="product" element=
              {
                <PrivateRouteIsAuth>
                <PrivateRouteIsAdmin>
                  <ProductPageManager />
                </PrivateRouteIsAdmin>
                </PrivateRouteIsAuth>
              }/>
              <Route path="product/new" element={
                <PrivateRouteIsAuth>
                <PrivateRouteIsAdmin>
                  <NewProductPageManager /> 
                </PrivateRouteIsAdmin>
                </PrivateRouteIsAuth>
              }/>
              <Route path="product/:id/edit" element={
                <PrivateRouteIsAuth>
                <PrivateRouteIsAdmin>
                  <EditProductManager />
                </PrivateRouteIsAdmin>
                </PrivateRouteIsAuth>
              }/>
              <Route path="signup" element={<SignUpPageAdmin /> }/>
              <Route path="signin" element={<SignInPageAdmin /> }/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
