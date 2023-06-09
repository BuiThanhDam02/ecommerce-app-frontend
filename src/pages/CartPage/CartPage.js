import React, { useEffect } from "react";
import "./CartPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { shopping_cart } from "../../utils/images";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { ToastContainer, toast } from "react-toastify";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart,
  getCartTotal,
} from "../../actions/CartAction";

const CartPage = () => {
  const currentUser = useSelector((state) => {
    return state.AuthReducer.AuthData;
  });

  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  useEffect(() => {
    dispatch(getCartTotal({ carts }));
  }, [carts]);
  const { itemsCount, totalAmount } = useSelector((state) => state.CartReducer);

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

  const handleCheckoutClick = () => {
    if (currentUser != null) {
      window.location.pathname = "/checkout";
    } else {
      toast.warning("Vui lòng đăng nhập");
    }
  };

  return (
    <div className="cart bg-whitesmoke">
      <div className="container">
        <ToastContainer />
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

          <div className="cart-cfoot flex align-start justify-between py-3 bg-white">
            <div className="cart-cfoot-l">
              <button
                type="button"
                className="clear-cart-btn text-danger fs-15 text-uppercase fw-4"
                onClick={() => dispatch(clearCart())}
              >
                <i className="fas fa-trash"></i>
                <span className="mx-1">Xóa tất cả</span>
              </button>
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

              <Link
                onClick={handleCheckoutClick}
                type="button"
                className="checkout-btn text-white bg-orange fs-16 text-center"
              >
                Thanh toán
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
