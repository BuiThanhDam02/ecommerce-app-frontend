import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import "./Product.scss";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
      <div className="product-item bg-white">
        <div className="category">{product?.category}</div>
        <div className="product-item-img">
          <img
            className="img-cover"
            src={product?.thumbnail}
            alt={product.title}
          />
        </div>
        <div className="product-item-info fs-14">
          <div className="brand">
            <span>Mô tả:</span>
            <span className="fw-7">{product?.description}</span>
          </div>
          <div className="title py-2">{product?.title}</div>
          <div className="price flex align-center justify-center">
            {formatPrice(product?.price)}
          </div>
        </div>
      </div>
    </Link>
  );
};
