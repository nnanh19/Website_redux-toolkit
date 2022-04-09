import { Menu } from "antd";
import React, { useEffect } from "react";
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
  const q_limit = params.get("limit");
  useEffect(() => {
    dispatch(getProducts(q_limit));
  }, [dispatch, q_limit]);

  const handleClick = (e) => {
    console.log('ev,',e);
    dispatch(getProductsByCategory(e.key));
  };
  console.log('cate',categories.categoryList);
  return (
    <div className="container-product">
      <div className="category-product">
        <div >
          <Title level={2}>Danh mục</Title>
        </div>

        {categories.categoryList?.map((category, index) => {
          return (
            <Menu
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

      <div class="container bg-white">
        <nav class="navbar navbar-expand-md navbar-light bg-white">
          <div class="container-fluid p-0">
            {" "}
            <a class="navbar-brand text-uppercase fw-800" href="/product">
              <span class="border-red pe-2">Sản </span>phẩm
            </a>{" "}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myNav"
              aria-controls="myNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span class="fas fa-bars"></span>{" "}
            </button>
            <div class="collapse navbar-collapse" id="myNav">
              <div class="navbar-nav ms-auto">
              
              </div>
            </div>
          </div>
        </nav>

        <div class="row">
          {products.map((product, index) => {
            return (
              <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <div class="product">
                  {" "}
                  <a onClick={ () => navigate(`${product._id}`)}>
                    <img src={product.img} alt="" />
                  </a>
                  <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon">
                      <LinkOutline color={"#00000"} />
                    </li>
                    <li class="icon mx-3">
                      <HeartOutline color={"#00000"} />
                    </li>
                    <li class="icon">
                      <CartOutline color={"#00000"} />
                    </li>
                  </ul>
                </div>
                {product.sale ? (
                  <div class="tag bg-red">{product.sale}%</div>
                ) : null}
                <div class="title pt-4 pb-1">{product.name}</div>
                <div class="d-flex align-content-center justify-content-center">
                  {" "}
                  <span class="fas fa-star"></span>{" "}
                  <span class="fas fa-star"></span>{" "}
                  <span class="fas fa-star"></span>{" "}
                  <span class="fas fa-star"></span>{" "}
                  <span class="fas fa-star"></span>{" "}
                </div>
                <div class="price">{numberFormat.format(product.price)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
