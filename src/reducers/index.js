import { combineReducers } from "redux";
import CartReducer from './CartReducer'
import ProductReducer from'./ProductReducer';
import  AuthReducer from './AuthReducer';
import CheckoutReducer from "./CheckoutReducer";

export const reducers = combineReducers({CheckoutReducer,ProductReducer,AuthReducer,CartReducer})