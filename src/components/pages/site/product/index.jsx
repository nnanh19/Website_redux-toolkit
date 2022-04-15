import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../admin/category/categorySlice";
import {
  getProducts,
  getProductsByCategory,
} from "../../admin/product/productSlice";
import { useNavigate } from "react-router-dom";
import { numberFormat } from "../../../../utils/numberFormat";

//IONICON
import { CartOutline, HeartOutline, LinkOutline } from "react-ionicons";

const { SubMenu } = Menu;
const { Title } = Typography;

const ProductPage = () => {
  const navigate = useNavigate();


  const categories = useSelector((data) => data.category.value);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  
  const products = useSelector((data) => data.product.value);
  let params = new URL(document.location).searchParams;
  // const q_limit = params.get("limit");
  const q_page = params.get("page");
  
  useEffect(() => {
    dispatch(getProducts({q_page:1}));
  }, [dispatch, q_page]);

  const handleClick = (e) => {
    console.log('ev,',e);
    dispatch(getProductsByCategory(e.key));
  };


  var currentPage = 1;

  const handlerNext = () =>{
    currentPage++;
    if(currentPage >= 4){
      currentPage = 4
    }
    dispatch(getProducts({q_page : currentPage}));
  }
  const handlerPrev = () =>{
    currentPage--;
    if(currentPage === 0){
      currentPage = 1
    }
    
    dispatch(getProducts({q_page : currentPage}));
  }

  const loadPage = (page) =>{
    currentPage = page;
    dispatch(getProducts({q_page : page}));
  }

  return (
    <div className="container-product">
      <div className="category-product">
        <div >
          <Title level={2}>Danh mục</Title>
        </div>

        {categories.categoryList?.map((category, index) => {
          return (
            <Menu key={index}
              onClick={handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              
            >
              <SubMenu key="" title={category.name}>
                {category.children.map((children, index) => {
                  return (
                    <Menu.Item key={children._id}> {children.name} </Menu.Item>
                  );
                })}
              </SubMenu>
            </Menu>
          );
        })}
      </div>

      <div className="container bg-white">
        <nav className="navbar navbar-expand-md navbar-light bg-white">
          <div className="container-fluid p-0">
            {" "}
            <a className="navbar-brand text-uppercase fw-800" href="/product">
              <span className="border-red pe-2">Sản </span>phẩm
            </a>{" "}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myNav"
              aria-controls="myNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="fas fa-bars"></span>{" "}
            </button>
            <div className="collapse navbar-collapse" id="myNav">
              <div className="navbar-nav ms-auto">
              
              </div>
            </div>
          </div>
        </nav>

        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <div className="product" >
                  {" "}
                  <a onClick={ () => navigate(`${product._id}`)}>
                    <img src={product.img} alt="" />
                  </a>
                  <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li className="icon">
                      <LinkOutline color={"#00000"} />
                    </li>
                    <li className="icon mx-3">
                      <HeartOutline color={"#00000"} />
                    </li>
                    <li className="icon">
                      <CartOutline color={"#00000"} />
                    </li>
                  </ul>
                </div>
                {product.sale ? (
                  <div className="tag bg-red">{product.sale}%</div>
                ) : null}
                <div className="title pt-4 pb-1">{product.name}</div>
                <div className="d-flex align-content-center justify-content-center">
                  {" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                </div>
                <div className="price">{numberFormat.format(product.price)}</div>
              </div>
            );
          })}
        </div>
        
      </div>
      <div className="paging-product">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#" onClick={handlerPrev}>Trước</a></li>
                <li className="page-item"><a className="page-link" href="#" onClick={() =>{loadPage(1)}}>1</a></li>
                <li className="page-item"><a className="page-link" href="#" onClick={() =>{loadPage(2)}}>2</a></li>
                <li className="page-item"><a className="page-link" href="#" onClick={() =>{loadPage(3)}}>4</a></li>
                <li className="page-item"><a className="page-link" href="#" onClick={() =>{loadPage(4)}}>5</a></li>
                <li className="page-item"><a className="page-link" href="#" onClick={handlerNext}>Sau</a></li>
              </ul>
              
            </nav>
        </div>
    </div>
  );
};

export default ProductPage;
