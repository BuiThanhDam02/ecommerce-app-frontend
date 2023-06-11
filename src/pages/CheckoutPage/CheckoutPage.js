import React, { useEffect, useState } from "react";
import "./checkout.scss";
import { useSelector, useDispatch } from "react-redux";
import { shopping_cart } from "../../utils/images";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  getCartTotal,
  clearCart,
} from "../../actions/CartAction";

const CheckoutPage = () => {
  const currentUser = useSelector((state) => {
    return state.AuthReducer.AuthData;
  });

  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  useEffect(() => {
    dispatch(getCartTotal({ carts }));
  }, [carts]);
  const { itemsCount, totalAmount } = useSelector((state) => state.CartReducer);

  const [showForm, setShowForm] = useState(false);

  const [address, setAddress] = useState(
    "Tp HCM, Việt Nam, Trái Đất (Vũ trụ 616)"
  );

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  const [selectPayment, setSelectPayment] = useState("option1");
  const handleSelectChange = (event) => {
    setSelectPayment(event.target.value);
  };

  const checkout = () => {
    dispatch(clearCart());
    window.location.href = "/";
  };

  if (currentUser === null) {
    return;
  }

  if (carts.length === 0) {
    return (
      <div className="container my-5">
        <div className="empty-cart flex justify-center align-center flex-column font-manrope">
          <img src={shopping_cart} alt="" />
          <span className="fw-6 fs-15 text-gray">
            Giỏ hàng của bạn đang trống.
          </span>
          <Link to="/" className="shopping-btn bg-orange text-white fw-5">
            Hãy mua sắm ngay nào!
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart bg-whitesmoke">
      <div className="container">
        <div className="cart-ctable">
          <div className="cart-chead bg-white">
            <div className="cart-ctr fw-6 font-manrope fs-15">
              <div className="cart-cth">
                <span className="cart-ctxt">S.N.</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Sản phẩm</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Đơn giá</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Số lượng</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Tổng giá</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Tính năng</span>
              </div>
            </div>
          </div>

          <div className="cart-cbody bg-white">
            {carts.map((cart, idx) => {
              return (
                <div className="cart-ctr py-4" key={cart?.id}>
                  <div className="cart-ctd">
                    <span className="cart-ctxt">{idx + 1}</span>
                  </div>
                  <div className="cart-ctd">
                    <span className="cart-ctxt">{cart?.title}</span>
                  </div>
                  <div className="cart-ctd">
                    <span className="cart-ctxt">
                      {formatPrice(cart?.price)}
                    </span>
                  </div>
                  <div className="cart-ctd">
                    <div className="qty-change flex align-center">
                      <button
                        type="button"
                        className="qty-decrease flex align-center justify-center"
                        onClick={() =>
                          dispatch(
                            toggleCartQty({
                              productId: cart?.id,
                              type: "DEC",
                              carts,
                            })
                          )
                        }
                      >
                        <i className="fas fa-minus"></i>
                      </button>

                      <div className="qty-value flex align-center justify-center">
                        {cart?.quantity}
                      </div>

                      <button
                        type="button"
                        className="qty-increase flex align-center justify-center"
                        onClick={() =>
                          dispatch(
                            toggleCartQty({
                              productId: cart?.id,
                              type: "INC",
                              carts,
                            })
                          )
                        }
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-ctd">
                    <span className="cart-ctxt text-orange fw-5">
                      {formatPrice(cart?.totalPrice)}
                    </span>
                  </div>

                  <div className="cart-ctd">
                    <button
                      type="button"
                      className="delete-btn text-dark"
                      onClick={() =>
                        dispatch(removeFromCart({ productID: cart?.id, carts }))
                      }
                    >
                      Xóa khỏi giỏ hàng
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-cfoot-r flex flex-column ml-15">
            <div className="total-txt flex align-center ">
              <div className="font-manrope fw-5 orange">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span> Địa chỉ nhận hàng</span>
              </div>
            </div>
            <div className="total-txt flex align-center">
              <div className="font-manrope fw-6 ">
                {currentUser.name != null ? currentUser.name : ""}
              </div>
              <span className=" mx-2 fw-4">{address}</span>

              <button className="fw-3 orange" onClick={handleButtonClick}>
                thay đổi
              </button>
            </div>
          </div>
          {showForm && (
            <form className="my-form" onSubmit={handleFormSubmit}>
              <label>
                Địa chỉ:
                <input
                  className="my-input"
                  type="text"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </label>
              <button className="my-button" type="submit">
                Xác nhận
              </button>
            </form>
          )}
          <div className="cart-cfoot flex align-start justify-between py-3 bg-white">
            <div className="cart-cfoot-l">
              <div className="total-txt flex align-center justify-end">
                <div className="font-manrope fw-5 mr-24">
                  Phương thức thanh toán
                </div>
                <div className="wrapper">
                  <input
                    type="radio"
                    id="option-1"
                    value="option1"
                    className="square-input "
                    checked={selectPayment === "option1"}
                    onChange={handleSelectChange}
                  />

                  <input
                    id="option-2"
                    type="radio"
                    value="option2"
                    className="square-input "
                    checked={selectPayment === "option2"}
                    onChange={handleSelectChange}
                  />
                  <label className="option option-1" htmlFor="option-1">
                    Thanh toán khi nhận hàng
                  </label>

                  <label className="option option-2" htmlFor="option-2">
                    VISA
                  </label>
                </div>
              </div>
            </div>

            <div className="cart-cfoot-r flex flex-column justify-end">
              <div className="total-txt flex align-center justify-end">
                <div className="font-manrope fw-5">
                  Tổng ({itemsCount}) sản phẩm:{" "}
                </div>
                <span className="text-orange fs-22 mx-2 fw-6">
                  {formatPrice(totalAmount)}
                </span>
              </div>
              <div className="total-txt flex align-center justify-end">
                <div className="font-manrope fw-5">Phí vận chuyển</div>
                <span className="text-orange fs-22 mx-2 fw-6">
                  {formatPrice(15000)}
                </span>
              </div>
              <div className="total-txt flex align-center justify-end">
                <div className="font-manrope fw-5">Tổng thanh toán</div>
                <span className="text-orange fs-22 mx-2 fw-6">
                  {formatPrice(totalAmount + 15000)}
                </span>
              </div>

              <button
                type="button"
                className="checkout-btn text-white bg-orange fs-16"
                onClick={checkout}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
