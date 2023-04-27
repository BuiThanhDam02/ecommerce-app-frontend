import './App.scss';
// react router v6
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import { Login,Home,CategoryProduct,Search,ProductSingle,Cart} from "./pages/index";
// components
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

import {Provider} from "react-redux";
import store from './store/ReduxStore';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Header />
          {/* <Sidebar /> */}

          <Routes>
          <Route path = "/" element = {<Home />} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/category/:category" element = {<CategoryProduct />} />
            <Route path = "/search/:searchTerm" element = {<Search />} />
            <Route path = "/product/:id" element = {<ProductSingle />} />
            
            <Route path = "/cart" element = {<Cart />} />          
            
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
