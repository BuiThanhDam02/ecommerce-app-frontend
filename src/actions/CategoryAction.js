

import * as CategoryAPI from "../api/CategoryRequest";

export const getAllCategories = async ()=>{
    
    const {data} = await CategoryAPI.getAllCategories();
     
    return data
};
export const getAllProductsByCategory = ({products,category}) => {
    let productsByCategory = [];
   if(category === "all"){
    productsByCategory = products
   }else
    productsByCategory =products.filter(product =>{
        return product.category === category;
    })
   
    return productsByCategory;
    

};