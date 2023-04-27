const CartReducer = (state = {CartData: [],itemsCount: 0,totalAmount: 0,isCartMessageOn: false},action) =>{
    switch (action.type) {
        case "UPDATE_CART":
            return {...state, CartData: action.data}
        case "TOTAL_CART":
            return {...state, totalAmount: action.data.totalAmount,itemsCount:action.data.itemsCount}    
        case "UPDATE_CART_MESSAGE":
            return {...state, isCartMessageOn: action.data}    
   
        default:
            return state
            
    }
};
export default CartReducer;