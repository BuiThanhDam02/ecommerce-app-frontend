import { useSelector } from 'react-redux';
import * as ProductAPI from '../api/ProductRequest';

export const getAllProducts = () => async (dispatch) => {
    dispatch({type: "PRODUCT_START"})
    try {
        const { data } = await ProductAPI.getAllProducts();
      
        
        dispatch({type: "PRODUCT_SUCCESS", data: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "PRODUCT_FAIL"})
    }
};

export const getSingleProduct = (id)  => {
    const singleProduct ={};
    try {
        const  data  =  useSelector((state)=>{return state.ProductData})
        
         data.map(product =>{
            if(product.id === id){
                singleProduct   = product;
            }
        })
        
    } catch (error) {
        console.log(error)
       
    
    }
    return singleProduct;
};