
import * as ProductAPI from '../api/ProductRequest';
import {BASE_IMAGE_URL} from "../utils/apiURL";

export const getAllProductsApi = () => async (dispatch) => {
    dispatch({type: "PRODUCT_START"})
    try {
        const { data } = await ProductAPI.getAllProducts();
        data.map((product,index) =>{
            product.thumbnail = BASE_IMAGE_URL + product.thumbnail
        })
        
        dispatch({type: "PRODUCT_SUCCESS", data: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "PRODUCT_FAIL"})
    }
};

export const getSingleProduct = ({products,id})  => {
    let singleProduct ={};
    try {
        const  data  =  products
        
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

export const getAllProducts = (state) =>{ return state.ProductReducer.ProductData};
export const getProductStatus = (state) =>{ return state.ProductReducer.loading};