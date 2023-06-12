const CheckoutReducer = (
    state = { CheckoutData: null, loading: false, error: false },
    action
  ) => {
    switch (action.type) {
      case "CHECKOUT_START":
        return { ...state, loading: true, error: false };
  
      case "CHECKOUT_SUCCESS":
        return { ...state, CheckoutData: action.data, loading: false, error: false };
  
      case "CHECKOUT_FAIL":
        return { ...state, loading: false, error: true };
  
      default:
        return state;
    }
  };
  export default CheckoutReducer;