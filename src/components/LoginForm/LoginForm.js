import React, { useState } from "react";
import "./LoginForm.scss";
import { facebook_icon } from "../../utils/images";
import { google_icon } from "../../utils/images";

const LoginFrom = () => {
  return (
    <form onSubmit={console.log("SignIn")}>
      <div id="loginForm">
        <h2 className="headerTitle">Đăng nhập</h2>
        <div>
          <div className="row">
            <label>Tài khoản</label>
            <input type="text" placeholder="Nhập tài khoản"></input>
          </div>
          <div className="row">
            <label>Mật khẩu</label>
            <input type="password" placeholder="Nhập mật khẩu"></input>
          </div>
          <div className="row" id="buttonSignIn">
            <button type="submit">Đăng nhập</button>
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
  );
};

export default LoginFrom;
