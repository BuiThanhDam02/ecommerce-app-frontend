


export const getSearchProducts = ({products,searchTerm})  =>{
    let searchProducts = []
        if(searchTerm ===null){
            searchProducts = products;
        }else{
             searchProducts = products.filter((product,index) =>{
                return product.title.includes(searchTerm);
            })
        }
        
        return searchProducts

    }