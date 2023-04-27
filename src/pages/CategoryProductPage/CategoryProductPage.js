import React, {Suspense} from 'react';
import "./CategoryProductPage.scss";
import ProductList from "../../components/ProductList/ProductList";
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProductsByCategory } from '../../actions/CategoryAction';
import {getAllProducts} from  '../../actions/ProductAction'
import Loader from '../../components/Loader/Loader';


const CategoryProductPage = () => {

  const { category } = useParams();
  const products = useSelector(getAllProducts);
  const categoryProducts = getAllProductsByCategory({products,category});


  

  return (
    <div className='cat-products py-5 bg-whitesmoke'>
      <div className='container'>
        <div className='cat-products-content'>
          <div className='title-md'>
            <h3>Sản phẩm <span className='text-capitalize'>{category}</span></h3>
          </div>

          <Suspense fallback={  <Loader />}>
            <ProductList products = {categoryProducts} />
          </Suspense>
            
          
        </div>
      </div>
    </div>
  )
}

export default CategoryProductPage