import React, {Suspense, useEffect, useState} from 'react';
import "./ProductSinglePage.scss";
import {json, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {  getSingleProduct, getAllProducts } from '../../actions/ProductAction';

import Loader from "../../components/Loader/Loader";
import {formatPrice} from "../../utils/helpers";
import { addToCart, getAllCarts,getCartMessageStatus, setCartMessageOff, setCartMessageOn } from '../../actions/CartAction';
import CartMessage from "../../components/CartMessage/CartMessage";

const ProductSinglePage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts)
  const carts = useSelector(getAllCarts)
  const product = getSingleProduct({products,id});

 

  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  // getting single product
  useEffect(() => {

    if(cartMessageStatus){
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  
  

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      
      return tempQty;
    })
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if(tempQty < 1) tempQty = 1;
      return tempQty;
    })
  }

  const addToCartHandler = (product) => {
   
    let totalPrice = quantity * product?.price;
    
    product.quantity = quantity
    product.totalPrice= totalPrice
    dispatch(addToCart({product,carts}));
    dispatch(setCartMessageOn());
  }

  const OnHandleBuyNow =()=>{
    let bnp = product;
    let totalPrice = quantity * bnp?.price;
    
    bnp.quantity = quantity
    bnp.totalPrice= totalPrice
    sessionStorage.setItem("BuyNowProduct",JSON.stringify(bnp));
    window.location.pathname = '/checkout';
  }

  return (
    <main className='py-5 bg-whitesmoke'>
      <Suspense fallback={<Loader/>}>
      <div className='product-single'>
        <div className='container'>
          <div className='product-single-content bg-white grid'>
            <div className='product-single-l'>
              <div className='product-img'>
                <div className='product-img-zoom'>
                  <img src = {product?(product.thumbnail ? product.thumbnail : "") : ""} alt = "" className='img-cover' />
                </div>

                
              </div>
            </div>

            <div className='product-single-r'>
              <div className='product-details font-manrope'>
                <div className='title fs-20 fw-5'>{product?.title}</div>
                <div>
                  <p className='para fw-3 fs-15'>{product?.description}</p>
                </div>
                <div className='info flex align-center flex-wrap fs-14'>
                  
                  
                  
                  <div className='brand'>
                    <span className='text-orange fw-5'>Hạng mục:</span>
                    <span className='mx-1 text-capitalize'>
                      {product?.category ? product.category : ""}
                    </span>
                  </div>
                </div>

                <div className = "price">
                  

                  <div className='flex align-center my-1'>
                    <div className='new-price fw-5 font-poppins fs-24 text-orange'>
                    {formatPrice(product?.price)}
                    </div>
                   
                  </div>
                </div>

                <div className='qty flex align-center my-4'>
                  <div className='qty-text'>Số lượng:</div>
                  <div className='qty-change flex align-center mx-3'>
                    <button type = "button" className='qty-decrease flex align-center justify-center' onClick={() => decreaseQty()}>
                      <i className='fas fa-minus'></i>
                    </button>
                    <div className = "qty-value flex align-center justify-center">{quantity}</div>
                    <button type = "button" className='qty-increase flex align-center justify-center' onClick={() => increaseQty()}>
                      <i className='fas fa-plus'></i>
                    </button>
                  </div>
                  
                </div>

                <div className='btns'>
                  <button type = "button" className='add-to-cart-btn btn'>
                    <i className='fas fa-shopping-cart'></i>
                    <span className='btn-text mx-2' onClick={() => { addToCartHandler(product)}}>Thêm vào giỏ hàng</span>
                  </button>
                  <button type = "button" className='buy-now btn mx-3' onClick={OnHandleBuyNow}>
                    <span className='btn-text'>Mua ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Suspense>
     

      {cartMessageStatus && <CartMessage />}
    </main>
  )
}

export default ProductSinglePage