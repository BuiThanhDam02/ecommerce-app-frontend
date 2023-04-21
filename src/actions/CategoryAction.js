
import { useSelector } from "react-redux"
import { getAllProducts } from "./ProductAction"

export const getAllCategories = ()=>{
    const products = useSelector(getAllProducts);
    const categories =[]
     products.map(product =>{
        
        if(!categories.includes(product.category)){
            categories.push(product.category)
        } 
    })
    return categories
};
export const getAllProductsByCategory = (category) => {
    const products = useSelector(getAllProducts);
    const productsByCategory =products.filter(product =>{
        return product.category === category;
    })
   
    return productsByCategory;
    

};