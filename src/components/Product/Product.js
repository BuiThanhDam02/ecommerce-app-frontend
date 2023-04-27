import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import {formatPrice} from "../../utils/helpers";

import "./Product.scss";

const Product = ({product}) => {

  const imageURL = lazy(()=>{return '../../assets/images/imgURL/'+product.thumbnail})
  return (
    <Link to = {`/product/${product?.id}`} key = {product?.id}>
      <div className='product-item bg-white'>
        <div className='category'>{product?.category}</div>
        <div className='product-item-img'>
          <img className='img-cover' src = {imageURL} alt = {product.title} />
        </div>
        <div className='product-item-info fs-14'>
          
          <div className='title py-2'>
            {product?.title}
          </div>
          <div className='price flex align-center justify-center'>
            <span className='new-price'>
              {formatPrice(product?.price)}
            </span>
            
           
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product