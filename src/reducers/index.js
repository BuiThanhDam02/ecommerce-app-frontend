import { combineReducers } from "redux";

import ProductReducer from'./ProductReducer';
import  AuthReducer from './AuthReducer';

export const reducers = combineReducers({ProductReducer,AuthReducer})