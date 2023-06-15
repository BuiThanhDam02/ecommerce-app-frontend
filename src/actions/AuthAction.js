import * as UserAPI from "../api/UserRequest";
import { toast } from "react-toastify";
export const checkLogin =
  ({ formdata }) =>
  async (dispatch) => {
    let currentUser;
    dispatch({ type: "LOGIN_START" });

    try {
      const { data } = await UserAPI.getAllUsers();
      const matchUsernames = data.filter((user) => {
        return user.username === formdata.username;
      });

      if (matchUsernames.length === 0) {
        toast.warning("Sai tài khoản");
        dispatch({ type: "LOGIN_FAIL" });
      } else {
        matchUsernames.map((user) => {
          if (user.password === formdata.password) {
            currentUser = user;
          } else {
            toast.warning("Sai mật khẩu");
          }
        });
        if (currentUser) {
          dispatch({ type: "LOGIN_SUCCESS", data: currentUser });
          window.location.href = "/";
        } else {
          dispatch({ type: "LOGIN_FAIL" });
        }
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGIN_FAIL" });
    }
  };

export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
  window.location.href = "/login";
};

export const updateUser =
  ({ formdata }) =>
  async (dispatch) => {
    dispatch({ type: "UPDATE", data: formdata });
  };
