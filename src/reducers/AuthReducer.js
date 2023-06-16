const AuthReducer = (
  state = { AuthData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: false };

    case "LOGIN_SUCCESS":
      return { ...state, AuthData: action.data, loading: false, error: false };

    case "LOGIN_FAIL":
      return { ...state, loading: false, error: true };
    case "LOGOUT":
      return { ...state, AuthData: action.data, loading: false, error: false };
    case "UPDATE":
      const currentUser = state.AuthData;
      const formdata = action.data;
      currentUser.name = formdata.name;
      currentUser.phone = formdata.phone;
      currentUser.address = formdata.address;
      return { ...state, AuthData: currentUser, loading: false, error: false };
    default:
      return state;
  }
};
export default AuthReducer;
