import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { detailProduct } from '../../admin/product/productSlice';

const Detail = () => {
  const {id} = useParams();

  const dispatch = useDispatch();
  const product = useSelector(data => data.product.detail)
  console.log('p',product);
  useEffect( () => {
    dispatch(detailProduct(id));
  } , [dispatch, id])

  console.log(id);
  return (
    <div className="container bootdey">
      <div className="col-md-12">
          <section className="panel">
              <div className="panel-body">
                  <div className="col-md-6">
                      <div className="pro-img-details">
                          <img src={product.img} alt="" />
                      </div>
                  </div>
                  <div className="col-md-6">
                      <h4 className="pro-d-title">
                          <a href="/" >
                              {product.name}
                          </a>
                      </h4>
                      <p>
                         {product.desc} 
                      </p>
                      <div className="product_meta">
                          <span className="posted_in"> <strong>Categories:</strong> <a rel="tag" href="/">Jackets</a>, <a rel="tag" href="/">Men</a>, <a rel="tag" href="/">Shirts</a>, <a rel="tag" href="/">T-shirt</a>.</span>
                          <span className="tagged_as"><strong>Tags:</strong> <a rel="tag" href="/">mens</a>, <a rel="tag" href="/">womens</a>.</span>
                      </div>
                      <div className="m-bot15"> <strong>Price : </strong> <span className="amount-old"> {product.price} </span>  <span className="pro-price"> {product.sale ? ( product.price  * ( (100 - product.sale) /100 )) : product.price} VNĐ</span></div>
                      <div className="form-group py-3">
                          <label>Quantity</label>
                          <input type="quantity" placeholder="1" className="form-control quantity mt-2" />
                      </div>
                      <p>
                          <button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                      </p>
                  </div>
              </div>
          </section>
      </div>
    </div>
  )
}

export default Detail