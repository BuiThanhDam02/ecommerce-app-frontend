import React, { useState } from "react";
import "./Profile.scss";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { updateUser } from "../../../actions/AuthAction";
const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => {
    return state.AuthReducer.AuthData;
  });
  const [formdata, setFormdata] = useState({
    name: currentUser.name,
    phone: currentUser.phone,
    address: currentUser.address === undefined ? "" : currentUser.address,
  });

  const onChangeProfile = (e) => {
    setFormdata((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleChangeProfile = (e) => {
    e.preventDefault();
    // console.log(currentUser);
    dispatch(updateUser({ formdata }));
    toast.success("Cập nhật thông tin thành công");
    // console.log(currentUser);
    // console.log(formdata);
    setTimeout(() => {
      window.location = "/profile";
    }, 5000);
  };

  return (
    <div className="profile-container">
      <ToastContainer />
      <div className="profile-header">
        <h1 className="header__title">Hồ Sơ Của Tôi</h1>
        <div className="header__content">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </div>
      </div>
      <form className="profile-form">
        <div className="profile-form__content">
          <div className="profile-form__item">
            <div className="item__title">Email</div>
            <div className="item__content">
              <div className="content">{currentUser.email}</div>
            </div>
          </div>

          <div className="profile-form__item item-input">
            <div className="item__title">Tên</div>
            <div className="item__content">
              <input
                type="text"
                placeholder="Nhập tên"
                name="name"
                onChange={onChangeProfile}
                value={formdata.name}
              />
            </div>
          </div>
          <div className="profile-form__item item-input">
            <div className="item__title">Số điện thoại</div>
            <div className="item__content">
              <input
                type="tel"
                placeholder="Nhập sđt"
                name="phone"
                onChange={onChangeProfile}
                value={formdata.phone}
              />
            </div>
          </div>
          <div className="profile-form__item item-input">
            <div className="item__title">địa chỉ</div>
            <div className="item__content">
              <input
                type="text"
                placeholder="Nhập địa chỉ"
                name="address"
                onChange={onChangeProfile}
                value={formdata.address}
              />
            </div>
          </div>
          <div className="profile-form__item item-input">
            <div className="item-btn__save">
              <button className="btn__save" onClick={handleChangeProfile}>
                Lưu
              </button>
            </div>
          </div>
        </div>
        <div className="profile-footer">
          <div className="footer__avatar">
            <div className="avatar__img">
              <img src="imgURL/avatar/avatar.jpg" className="avatar" />
            </div>
            <input className="hidden" type="file" accept=".jpg, .jpeg, .png" />
            <button type="button" className="avt__btn">
              Chọn ảnh
            </button>
            <div className="avatar_footer">
              <div>Dung lượng file tối đa 1 MB</div>
              <div>Định dạng: .JPEG, .PNG</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
