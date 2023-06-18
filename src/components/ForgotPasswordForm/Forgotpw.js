import React, { useState } from "react";
import "./Forgotpw.scss";
import { facebook_icon } from "../../utils/images";
import { google_icon } from "../../utils/images";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
  });

  const onHandleChange = (e) => {
    setFormdata((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const onHandleForgotPassword = (e) => {
    e.preventDefault();
    if (formdata.email === "user1@gmail.com" && formdata.username === "user1") {
      toast.success("Vui lòng kiểm tra họp thư email!");
    } else {
      toast.warning("Tên tài khoản và email không khớp!");
    }
  };

  return (
    <div>
      <form>
        <div id="loginForm">
          <ToastContainer />
          <h2 className="headerTitle">Quên mật khẩu</h2>
          <div id="login">
            <div className="row">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={onHandleChange}
                placeholder="Nhập email"
              ></input>
            </div>
            <div className="row">
              <label>Tài khoản</label>
              <input
                type="text"
                name="username"
                onChange={onHandleChange}
                placeholder="Nhập tài khoản"
              ></input>
            </div>
            <div className="row" id="buttonSignIn">
              <button onClick={onHandleForgotPassword} type="submit">
                Lấy lại mật khẩu
              </button>
            </div>
            <div className="row nav-link register">
              <label>Trở về</label>
              <a href="/login" type="submit">
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
    </div>
  );
}

export default ForgotPassword;
