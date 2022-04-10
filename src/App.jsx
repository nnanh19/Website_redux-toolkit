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
import CategoryPageManager from './components/pages/admin/category';
import SubCategoryPageManager from './components/pages/admin/category/subCate';
import NewCategoryPageManager from './components/pages/admin/category/new';
import NewSubCategoryPageManager from './components/pages/admin/category/newSub';
import EditSubCategoryPageManager from './components/pages/admin/category/editSub';
import EditCategoryPageManager from './components/pages/admin/category/edit';

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
              {/* product */}
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
              {/* category */}
              <Route path="category" element={
                <PrivateRouteIsAuth>
                <PrivateRouteIsAdmin>
                  <CategoryPageManager />
                </PrivateRouteIsAdmin>
                </PrivateRouteIsAuth>
              }/>
              <Route path="category/:id" element={
                <PrivateRouteIsAuth>
                <PrivateRouteIsAdmin>
                  <SubCategoryPageManager />
                </PrivateRouteIsAdmin>
                </PrivateRouteIsAuth>
              }/>
              <Route path="category/new" element={
                <PrivateRouteIsAuth>
                <PrivateRouteIsAdmin>
                  <NewCategoryPageManager />
                </PrivateRouteIsAdmin>
                </PrivateRouteIsAuth>
              }/>
              <Route path="category/newsub/:id" element={
                <PrivateRouteIsAuth>
                <PrivateRouteIsAdmin>
                  <NewSubCategoryPageManager />
                </PrivateRouteIsAdmin>
                </PrivateRouteIsAuth>
              }/>
              <Route path="category/:id/edit" element={
                <PrivateRouteIsAuth>
                <PrivateRouteIsAdmin>
                  <EditCategoryPageManager />
                </PrivateRouteIsAdmin>
                </PrivateRouteIsAuth>
              }/>
              <Route path="category/:id/editsub" element={
                <PrivateRouteIsAuth>
                <PrivateRouteIsAdmin>
                  <EditSubCategoryPageManager />
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
