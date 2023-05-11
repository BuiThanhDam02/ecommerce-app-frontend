import React,{useEffect} from "react";
import "./ProductList.scss";
import Product from "../Product/Product";
import { useSelector, useDispatch } from 'react-redux';


import { getAllProductsApi, getAllProducts,getProductStatus } from '../../actions/ProductAction';
import Loader from"../Loader/Loader"

const ProductList = ({ category }) => {

  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getProductStatus);
  if (products.length === 0) {
    useEffect(() => {
      
      dispatch(getAllProductsApi());
     
   }, []);
  }
  
  
  

  // randomizing the products in the list
  let tempProducts = [];
  if (category==="all") {
    if(products.length > 0){
      for(let i in products){
        let randomIndex = Math.floor(Math.random() * products.length);
  
        while(tempProducts.includes(products[randomIndex])){
          randomIndex = Math.floor(Math.random() * products.length);
        }
        tempProducts[i] = products[randomIndex];
      }
    }
    tempProducts = tempProducts.slice(0,10);
  }else{
    tempProducts = products.filter(product => product.category === category).slice(0,5);
  }
  

  


  return (
    
      <div className="product-lists grid bg-whitesmoke my-3">
        {productStatus === true ? <Loader />:
        <>
         {tempProducts.map((product) => {
      return <Product key={product.id} product={product} />;
      })}
        </>
       }
    
    </div>
    
  );
};

export default ProductList;
