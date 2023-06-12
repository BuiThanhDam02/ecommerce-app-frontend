import React, {Suspense, useEffect, useState} from 'react';
import "./HomePage.scss";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import { getAllCategories } from '../../actions/CategoryAction';
import ProductList from "../../components/ProductList/ProductList"
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [categories,setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories(){
     setCategories(await getAllCategories())
    
  }
  fetchCategories()
  
 
}, []);


  return (
    <main>
      <div className='slider-wrapper'>
        <HeaderSlider />
      </div>
      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='categories-item'>
              <div className='title-md'>
                <h3>Các sản phẩm của chúng tôi</h3>
              </div>
             <Suspense fallback={<Loader/>}>
             <ProductList category={"all"}/>
               </Suspense> 
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[0]}</h3>
              </div>
              <Suspense fallback={<Loader/>}>
               <ProductList category={categories[0]} />
               </Suspense>
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[1]}</h3>
              </div>
              <Suspense fallback={<Loader/>}>
              <ProductList category={categories[1]} />
              </Suspense>
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[2]}</h3>
              </div>
              <Suspense fallback={<Loader/>}>
              <ProductList category={categories[2]} />
              </Suspense>
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[3]}</h3>
              </div>
              <Suspense fallback={<Loader/>}>
               <ProductList category={categories[3]} />
               </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage