import { Menu } from 'antd';
import React, { useEffect } from 'react'
import { Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../admin/category/categorySlice';
import { getProducts } from '../../admin/product/productSlice';
import { useNavigate } from 'react-router-dom';
const { SubMenu } = Menu;
const {Title} = Typography;

const ProductPage = () => {
  const navigate = useNavigate();
  const handleClick = e => {
    console.log('click ', e);
  };
  const categories = useSelector(data => data.category.value);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getCategories());
  } , [dispatch])

  const products = useSelector(data => data.product.value);
  console.log('pr',products);
  useEffect(() => {
    dispatch(getProducts());
  } , [dispatch])
  return (
    
    <div className='container-product'>
      <div>
        <div>
          <Title level={2} >Danh mục</Title>
        </div>
        
        {categories.categoryList?.map((category , index) => {
          return (
            <Menu
              onClick={handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"  key={index}
            >
              <SubMenu  key='' title={category.name}>
                  {category.children.map((children, index) => {
                  return (
                    <Menu.Item key={children._id} > {children.name} </Menu.Item> 
                  )
                })} 
              </SubMenu>
              
            </Menu>
          )
        })}
      </div>
    
      <div className="wrapper">
            <div className="container">
                <div className="row g-1">
                  {products.map( (product , index) => {
                    return (
                        <div className="col-md-3" key={index}>
                            <div className="card p-3">
                                <div className="text-center">  <a onClick={() => navigate(`${product._id}`)} ><img src={product.img} width={200} /></a> </div>
                                <div className="product-details"> <del className="font-weight-bold d-block">{ product.price } VNĐ</del> <span className="font-weight-bold d-block">{product.sale ? ( product.price  * ( (100 - product.sale) /100 )) : product.price} VNĐ</span> <span>{product.name}</span>
                                    <div className="buttons d-flex flex-row">
                                        <div className="cart"><i className="fa fa-shopping-cart"></i></div> <button className="btn btn-success cart-button btn-block"><span className="dot">1</span>Add to cart </button>
                                    </div>
                                    <div className="weight"> <small>{product.sale} %</small> </div>
                                </div>
                            </div>
                        </div>  
                    )
                  })}
                    
                    
                    
                </div>
            </div>
        </div>
      </div>
    
    
  )
}

export default ProductPage