

import * as CategoryAPI from "../api/CategoryRequest";

export const getAllCategories = async ()=>{
    
    const {data} = await CategoryAPI.getAllCategories();
     
    return data
};
export const getAllProductsByCategory = ({product,category}) => {
    const products = product;
    const productsByCategory =products.filter(product =>{
        return product.category === category;
    })
   
    return productsByCategory;
    

};