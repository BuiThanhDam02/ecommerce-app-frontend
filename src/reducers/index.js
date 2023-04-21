import { combineReducers } from "redux";
import CartReducer from './CartReducer'
import ProductReducer from'./ProductReducer';
import  AuthReducer from './AuthReducer';

export const reducers = combineReducers({ProductReducer,AuthReducer,CartReducer})