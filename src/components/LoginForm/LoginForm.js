import React, { useEffect, useState } from "react";
import "./LoginForm.scss";
import { facebook_icon } from "../../utils/images";
import { google_icon } from "../../utils/images";
import { checkLogin } from "../../actions/AuthAction";
import { useSelector, useDispatch } from 'react-redux';

function LoginFrom({isSignIn}) {
 
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  
  useEffect(()=>{setIsLogin(isSignIn)},[isSignIn])
  
  const [formdata, setFormdata] = useState({
    username:"",
    email:"",
    password:"",
    age:0,
    name:""
  });
 

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(checkLogin({formdata}))
    
    
  
  };

  const onHandleChange = (e) => {
      setFormdata(pre => {return{...pre,[e.target.name]:e.target.value}});
   };
  const handleRegister = () => {};

  return (
    <div>
      {isLogin ? (
        <form >
          <div id="loginForm">
            <h2 className="headerTitle">Đăng nhập</h2>
            <div id="login">
              <div className="row">
                <label>Tài khoản</label>
                <input type="text" name="username" onChange={onHandleChange} placeholder="Nhập tài khoản"></input>
              </div>
              <div className="row">
                <label>Mật khẩu</label>
                <input type="password" name="password" onChange={onHandleChange} placeholder="Nhập mật khẩu"></input>
              </div>
              <div className="row" id="buttonSignIn">
                <button type="submit" onClick={handleLogin}>Đăng nhập</button>
              </div>
              <div className="row nav-link">
                <label>Chưa có tài khoản</label>
                <a
                  onClick={(e) => {
                    setIsLogin(false);
                  }}
                  type="submit"
                >
                  Đăng ký
                </a>
              </div>
            </div>
            <div className="alternativeLogin">
              <label>Đăng nhập bằng</label>
              <div className="iconGroup">
                <a href="#">
                  <img src={facebook_icon} />
                </a>
                <a href="#">
                  <img src={google_icon} />
                </a>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <form>
          <div id="loginForm">
            <h2 className="headerTitle">Đăng ký</h2>
            <div id="login">
              <div className="row">
                <label>Tài khoản</label>
                <input type="text" placeholder="Nhập tài khoản"></input>
              </div>
              <div className="row">
                <label>Email</label>
                <input type="email" placeholder="Nhập email"></input>
              </div>
              <div className="row">
                <label>Số điện thoại</label>
                <input type="tel" placeholder="Nhập số điện thoại"></input>
              </div>
              <div className="row">
                <label>Mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu"></input>
              </div>
              <div className="row">
                <label>Nhập lại mật khẩu</label>
                <input type="password" placeholder="Nhập lại mật khẩu"></input>
              </div>
              <div className="row" id="buttonSignIn">
                <button type="submit">Đăng ký</button>
              </div>
              <div className="row nav-link">
                <label>Đã có tài khoản</label>
                <a
                  onClick={(e) => {
                    setIsLogin(true);
                  }}
                  type="submit"
                >
                  Đăng nhập
                </a>
              </div>
            </div>
            <div className="alternativeLogin">
              <label>Đăng nhập bằng</label>
              <div className="iconGroup">
                <a href="#">
                  <img src={facebook_icon} />
                </a>
                <a href="#">
                  <img src={google_icon} />
                </a>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginFrom;
