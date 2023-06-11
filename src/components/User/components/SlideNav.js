import "./SlideNav.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const SlideNav = () => {
  const currentUser = useSelector((state) => {
    return state.AuthReducer.AuthData;
  });

  const [isActive, setIsActive] = useState("");

  const onClickAcitive = (link) => {
    setIsActive(link);
  };

  return (
    <div className="sidenav">
      <div className="profile-left">
        <Link className="profile-avatar">
          <img src="imgURL/avatar/avatar.jpg" className="profile-avatar__img" />
        </Link>
        <div className="profile-avatar__info">
          <div className="avatar__name">{currentUser.name}</div>
          <Link to="/profile" className="avatar__edit ">
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 4 }}
            >
              <path
                d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                fill="#9B9B9B"
                fillRule="evenodd"
              />
            </svg>
            Sửa hồ sơ
          </Link>
        </div>
      </div>
      <div className="mt-7">
        <Link
          to="/profile"
          className={
            isActive === ""
              ? "profile_myaccount active_slidenav"
              : "profile_myaccount "
          }
          onClick={() => onClickAcitive("")}
        >
          <div className="myaccount__icon">
            <img
              src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
              alt=""
              className="img-full"
            />
          </div>
          Tài khoản của tôi
        </Link>
        <Link
          to="/profile/changepassword"
          // className="profile_myaccount item"
          className={
            isActive === "changepassword"
              ? "profile_myaccount item active_slidenav"
              : "profile_myaccount item"
          }
          onClick={() => onClickAcitive("changepassword")}
        >
          <div className="myaccount__icon">
            <img
              src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
              alt=""
              className="img-full"
            />
          </div>
          Đổi mật khẩu
        </Link>
        <Link
          to="/profile/order"
          className={
            isActive === "order"
              ? "profile_myaccount item active_slidenav"
              : "profile_myaccount item"
          }
          onClick={() => onClickAcitive("order")}
        >
          <div className="myaccount__icon">
            <img
              src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078"
              alt=""
              className="img-full"
            />
          </div>
          Đơn mua
        </Link>
      </div>
    </div>
  );
};

export default SlideNav;
