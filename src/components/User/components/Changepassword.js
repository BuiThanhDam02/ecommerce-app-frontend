import "./Profile.scss";
const Changepassword = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="header__title">Đổi mật khẩu</h1>
        <div className="header__content">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </div>
      </div>
      <form className="form-changepass">
        <div className="profile-form__content">
          <div className="profile-form__item item-input">
            <div className="item__title">Mật khẩu cũ</div>
            <div className="item__content">
              <input type="password" placeholder="Nhập mật khẩu cũ" />
            </div>
          </div>
          <div className="profile-form__item item-input">
            <div className="item__title">Mật khẩu mới</div>
            <div className="item__content">
              <input type="password" placeholder="Nhập mật khẩu mới" />
            </div>
          </div>
          <div className="profile-form__item item-input">
            <div className="item__title">Nhập lại mật khẩu</div>
            <div className="item__content">
              <input type="password" placeholder="Nhập lại mật khẩu" />
            </div>
          </div>
          <div className="profile-form__item item-input">
            <div className="item-btn__save">
              <button className="btn__save" type="submit">
                Lưu
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Changepassword;
