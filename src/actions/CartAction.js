

export const addToCart = ({product,carts}) => (dispatch) =>{
    
    const isItemInCart = carts.find(item => item.id === product.id); 
    if(isItemInCart){
        const tempCart = carts.map(item => {
            if(item.id === product.id){
                let tempQty = item.quantity + product.quantity;
                let tempTotalPrice = tempQty * item.price;

                return {
                    ...item, quantity: tempQty, totalPrice: tempTotalPrice
                }
            } else {
                return item;
            }
        });

        carts = tempCart;
        
    } else {
        carts.push(product);
        
    }
    dispatch({type:"UPDATE_CART",data:carts});
}

export const removeFromCart = ({productID,carts}) => (dispatch) =>{
    
    const tempCart = carts.filter(item => item.id !== productID);
    carts = tempCart;
    dispatch({type:"UPDATE_CART",data:carts});
}

export const clearCart = () => (dispatch) =>{
    const carts = [];
    dispatch({type:"UPDATE_CART",data:carts});
}

export const getCartTotal = ({carts}) => (dispatch) =>{
    

    const totalAmount = carts.reduce((cartTotal, cartItem) => {
        return cartTotal += cartItem.totalPrice
    }, 0);

   const itemsCount = carts.length;
    dispatch({type:"TOTAL_CART",data:{totalAmount:totalAmount,itemsCount:itemsCount}});
}

export const toggleCartQty = ({productId, type,carts}) => (dispatch) =>{
    
    const tempCart = carts.map(item => {
        if(item.id === productId){
            let tempQty = item.quantity;
            let tempTotalPrice = item.totalPrice;

            if(type === "INC"){
                tempQty++;
                
                tempTotalPrice = tempQty * item.price;
            }

            if(type === "DEC"){
                tempQty--;
                if(tempQty < 1) tempQty = 1;
                tempTotalPrice = tempQty * item.price;
            }

            return {...item, quantity: tempQty, totalPrice: tempTotalPrice};
        } else {
            return item;
        }
    });

    carts = tempCart;
    dispatch({type:"UPDATE_CART",data:carts});
}

export const setCartMessageOn = () => (dispatch) =>{
    const isCartMessageOn = true;
    dispatch({type:"UPDATE_CART_MESSAGE",data:isCartMessageOn});
}
export const setCartMessageOff = () => (dispatch) =>{
    const isCartMessageOn = false;
    dispatch({type:"UPDATE_CART_MESSAGE",data:isCartMessageOn});
}

export const getAllCarts = (state) => {return state.CartReducer.CartData};
export const getCartItemsCount = (state) => {return state.CartReducer.itemsCount}
export const getCartMessageStatus = (state) =>{return state.CartReducer.isCartMessageOn} 