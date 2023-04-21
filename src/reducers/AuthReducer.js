const AuthReducer = (state = {AuthData: null,loading: false , error : false},action) =>{
    switch (action.type) {
        case "LOGIN_START":
            return {...state, loading : true,error:false}
            
        case "LOGIN_SUCCESS":
            
            return {...state,AuthData : action.data, loading: false, error : false}
            
        case "LOGIN_FAIL":
            return {...state, loading: false, error : true}
           
       
        default:
            return state
            
    }
};
export default AuthReducer;