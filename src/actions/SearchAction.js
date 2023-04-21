import { useSelector } from "react-redux"
import { getAllProducts } from "./ProductAction"


export const searchProducts = (text)  =>{
   
        const products = useSelector(getAllProducts);
        const searchProducts = products.filter(product =>{
            return product.includes(text);
        })
        return searchProducts

    }