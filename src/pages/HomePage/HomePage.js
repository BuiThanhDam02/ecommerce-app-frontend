import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import { useSelector, useDispatch } from "react-redux";

import { getAllCategories } from "../../actions/CategoryAction";
import ProductList from "../../components/ProductList/ProductList";
import {
  getAllProductsApi,
  getAllProducts,
  getProductStatus,
} from "../../actions/ProductAction";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      setCategories(await getAllCategories());
    }
    fetchCategories();
    dispatch(getAllProductsApi());
  }, []);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getProductStatus);

  // randomizing the products in the list
  let tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);

      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }
  tempProducts = tempProducts.slice(0, 10);

  let catProductsOne = products
    .filter((product) => product.category === categories[0])
    .slice(0, 5);
  let catProductsTwo = products
    .filter((product) => product.category === categories[1])
    .slice(0, 5);
  let catProductsThree = products
    .filter((product) => product.category === categories[2])
    .slice(0, 5);
  let catProductsFour = products
    .filter((product) => product.category === categories[3])
    .slice(0, 5);

  return (
    <main>
      <div className="slider-wrapper">
        <HeaderSlider />
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>Các sản phẩm của chúng tôi</h3>
              </div>
              {productStatus === true ? (
                <Loader />
              ) : (
                <ProductList products={tempProducts} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === true ? (
                <Loader />
              ) : (
                <ProductList products={catProductsOne} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === true ? (
                <Loader />
              ) : (
                <ProductList products={catProductsTwo} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === true ? (
                <Loader />
              ) : (
                <ProductList products={catProductsThree} />
              )}
            </div>

            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === true ? (
                <Loader />
              ) : (
                <ProductList products={catProductsFour} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
