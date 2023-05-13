import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { logOut } from "../../actions/AuthAction";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const currentUser = useSelector((state) => {
    return state.AuthReducer.AuthData;
  });
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut);
  };

  return (
    <header className="header text-white">
      <div className="container">
        <div className="header-cnt">
          <div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
            <div className="header-cnt-top-l">
              <ul className="flex top-links align-center">
                <li>
                  {/* dummy links */}
                  <Link to="/seller">Trung tâm người bán</Link>
                </li>
                {/* <li className='vert-line'></li> */}
                {/* <li>
                   dummy links 
                  <Link to = "/download">Tải xuống</Link>
                </li> */}
                <li className="vert-line"></li>
                <li className="flex align-center">
                  <span className="fs-13">Theo dõi chúng tôi</span>
                  <ul className="social-links flex align-center">
                    <li className="mx-2">
                      <a href="www.facebook.com" className="fs-15">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href="www.instagram.com" className="fs-15">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-cnt-top-r">
              <ul className="top-links flex align-center">
                {currentUser ? (
                  <li>
                    <div className="account-container">
                      <div className="shop-avatar">
                        <img src="imgURL/avatar/avatar.jpg" />
                      </div>
                      <div className="account-dropdown">
                        {currentUser.name}
                        <div className="account-dropdown__content">
                          <Link className="account-dropdown__item">
                            <p>Tài khoản của tôi</p>
                          </Link>
                          <Link className="account-dropdown__item">
                            <p>Đơn mua</p>
                          </Link>
                          <button
                            className="account-dropdown__item"
                            onClick={logout}
                          >
                            Đăng xuất
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/register">
                        <span className="top-link-itm-txt">Đăng kí</span>
                      </Link>
                    </li>
                    <li className="vert-line"></li>
                    <li>
                      <Link to="/login">
                        <span className="top-link-itm-txt">Đăng nhập</span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="header-cnt-bottom">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
