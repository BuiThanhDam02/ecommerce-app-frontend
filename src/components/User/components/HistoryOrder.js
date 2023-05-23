import React from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";
import { useSelector } from "react-redux";

const purchaseTabs = [
  { id: 1, name: "Tất cả" },
  { id: 2, name: "Chờ xác nhận" },
  { id: 3, name: "Chờ lấy hàng" },
  { id: 4, name: "Đang giao" },
  { id: 5, name: "Đã giao" },
  { id: 6, name: "Đã huỷ" },
];

const Order = () => {
  const cart = useSelector((state) => {
    return state.CartReducer.CartData;
  });
  const purchaseLink = purchaseTabs.map((tab) => {
    return (
      <Link key={tab.id} className="purchaseLink">
        {tab.name}
      </Link>
    );
  });

  return (
    <div>
      {console.log(cart)}
      <div className="history-order">
        <div className="order-tabs">
          <div className="order-tab__content">{purchaseLink}</div>
          <div>
            {cart?.map((item) => (
              <div key={item.id} className="order-item">
                <Link className="item_link">
                  <div className="flex-shrink-0">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="item__img"
                    />
                  </div>
                  <div className="item__info">
                    <div className="truncate">{item.title}</div>
                    <div className="mt-3">x{item.quantity}</div>
                  </div>
                  <div className="item__price">
                    <span className="price truncate">{item.price} đ</span>
                  </div>
                </Link>
                <div className="item-total">
                  <div>
                    <span>Tổng giá tiền</span>
                    <span className="totalprice">{item.totalPrice} đ</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
