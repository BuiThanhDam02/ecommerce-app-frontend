import React, {Suspense} from 'react';
import "./SearchPage.scss";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getAllProducts} from  '../../actions/ProductAction'
import Loader from '../../components/Loader/Loader';
import ProductList from '../../components/ProductList/ProductList';
import {getSearchProducts} from '../../actions/SearchAction'
const SearchPage = () => {
  
  const {searchTerm } = useParams();
  
  const products = useSelector(getAllProducts);
  const searchProducts =getSearchProducts({products,searchTerm});
  



  if(searchProducts.length === 0){
    return (
      <div className='container' style = {{
        minHeight: "70vh"
      }}>
        <div className='fw-5 text-danger py-5'>
          <h3>Không tìm thấy sản phẩm nào.</h3>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className='search-content bg-whitesmoke'>
        <div className='container'>
          <div className='py-5'>
            <div className='title-md'>
              <h3>Kết quả tìm kiếm:</h3>
            </div>
            <br />
            <Suspense fallback={<Loader /> }>
            	<ProductList productList = {searchProducts} />
            </Suspense>
             
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchPage;