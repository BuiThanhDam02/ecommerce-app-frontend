import React,{Suspense, useEffect} from "react";
import "./ProductList.scss";
import Product from "../Product/Product";
import { useSelector, useDispatch } from 'react-redux';


import { getAllProductsApi, getAllProducts,getProductStatus } from '../../actions/ProductAction';
import Loader from"../Loader/Loader"

const ProductList = ({ category,productList }) => {

  const dispatch = useDispatch();
 
  

  // randomizing the products in the list
  let tempProducts = [];
  if (productList) {
    tempProducts = productList;
  }else{
    useEffect(() => {
      
      dispatch(getAllProductsApi());
     
   }, []);
    const products = useSelector(getAllProducts);
   
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
  }
  
  

  


  return (
    
      <div className="product-lists grid bg-whitesmoke my-3">
       <Suspense fallback={<Loader />}>
       <>
         {tempProducts.map((product) => {
      return <Product key={product.id} product={product} />;
      })}
        </>
         </Suspense>  
      
       
    
    </div>
    
  );
};

export default ProductList;
