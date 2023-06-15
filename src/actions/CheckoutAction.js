export const doCheckout = ({carts})=>(dispatch)=>{

    dispatch({type:"CHECKOUT_START"})
    let data = []
    if (carts.length >0   ){
        carts.map((cart,index)=>{
            data.push(cart)      
        })
        dispatch({type:"CHECKOUT_SUCCESS",data:data})
    }else{
        dispatch({type:"CHECKOUT_FAIL"})
    }


}