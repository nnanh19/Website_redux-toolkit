import { Menu } from "antd";
import React, { useEffect} from "react";
import { Link , useNavigate } from "react-router-dom";
import { Input } from "antd";
import { PeopleOutline } from "react-ionicons";
import { LogOutOutline } from "react-ionicons";
import { CartOutline } from "react-ionicons";
import { Select } from 'antd';
import { logOut, user } from "../../pages/admin/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProducts } from "../../pages/admin/product/productSlice";
const { Search } = Input;


const { Option } = Select;



const HeaderSite = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector(data => data.auth.isLogged)
  useEffect( () =>{
    dispatch(user())    
  } , [dispatch])

  const logout = () => {
    dispatch(logOut());
  };

  const onSearch = (value) => {
    dispatch(searchProducts({ value}))
  }

  function handleChange(value) {
   if(value === "infoUser"){
    navigate("/signin");
   }else if(value === "logout"){
      logout()
   }
  }
  
  return (
    <div className="container-custom">
      <div>
        <div className="top-header">
          { localStorage.getItem('user') ? (
            <div>
               <Select defaultValue="Hello"  style={{ width: 120}} onChange={handleChange}>
                <Option value="infoUser"><PeopleOutline color={"#00000"}/>Tài khoản</Option>
                <Option value="logout"><LogOutOutline  color={"#00000"} />Đăng xuất</Option>
              </Select>
            </div>
          ) :   (
            <div>
              {" "}
              <a href="/signin">
                Đăng nhập
                <PeopleOutline color={"#00000"} />
              </a>
            </div>
          ) }

          <div>
            <a href="/my-cart">
              Giỏ hàng
              <CartOutline color={"#00000"} />
            </a>
          </div>
        </div>
        <div className="header">
          <div className="logo">REDUX</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/" /> Trang Chủ
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/product" /> Sản Phẩm
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="#" /> Tin Tức
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="#" /> Liên Hệ
            </Menu.Item>
          </Menu>
          <div>
            <Search
              placeholder="Tìm kiếm"
              allowClear
              onSearch={onSearch}
              style={{ width: 204 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSite;
