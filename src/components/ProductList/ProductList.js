import React from "react";
import "./ProductList.scss";
import Product from "../Product/Product";

const ProductList = ({ products }) => {
  return (
    <div className="product-lists grid bg-whitesmoke my-3">
      {products.map((product) => {
        return <Product key={product.id} />;
      })}
    </div>
  );
};

export default ProductList;
