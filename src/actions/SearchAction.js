


export const searchProducts = ({product,text})  =>{
   
        const products = product;
        const searchProducts = products.filter(product =>{
            return product.includes(text);
        })
        return searchProducts

    }