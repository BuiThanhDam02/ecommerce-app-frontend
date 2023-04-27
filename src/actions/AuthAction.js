import * as UserAPI from '../api/UserRequest';

export const checkLogin = (formdata) => async (dispatch) => {
    let currentUser
    dispatch({type:'LOGIN_START'})

    try {
        const {data} = await UserAPI.getAllUsers();
        const matchUsernames = data.filter(user => {return user.username === formdata.username});
        if (matchUsernames.length ===0){
            dispatch({type:'LOGIN_FAIL'})
        }else{
            matchUsernames.map(user =>{
                if(user.password === formdata.password){
                    currentUser = user
                }
            })
            if(currentUser){
                dispatch({type:'LOGIN_SUCCESS',data:currentUser})
            }else{
                dispatch({type:'LOGIN_FAIL'})
            }
            
        }
    } catch (error) {
        console.log(error)
        dispatch({type:'LOGIN_FAIL'})
    }

}