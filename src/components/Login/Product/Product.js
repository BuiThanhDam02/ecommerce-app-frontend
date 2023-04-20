import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/helpers";
import "./Product.scss";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
      <div className="product-item bg-white">
        <div className="category">{product?.category}</div>
      </div>
    </Link>
  );
};
