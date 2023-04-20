const ProductReducer = (state = {ProductData: null,loading: false , error : false},action) =>{
    switch (action.type) {
        case "PRODUCT_START":
            return {...state, loading : true,error:false}
            
        case "PRODUCT_SUCCESS":
            
            return {...state,ProductData : action.data, loading: false, error : false}
            
        case "PRODUCT_FAIL":
            return {...state, loading: false, error : true}
           
       
        default:
            return state
            
    }
};
export default ProductReducer;