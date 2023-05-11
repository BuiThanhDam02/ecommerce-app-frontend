import "./App.scss";
// react router v6
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// pages
import {
  Login,
  Home,
  CategoryProduct,
  Search,
  ProductSingle,
  Cart,
} from "./pages/index";
// components
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state) => {
    return state.AuthReducer.AuthData;
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Sidebar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path = "/login" element = {currentUser?<Login isSignIn={true}/>:<Navigate to={'../'}/>} /> */}
          <Route path="/login" element={<Login isSignIn={true} />} />
          <Route
            path="/register"
            element={
              currentUser ? <Login isSignIn={false} /> : <Navigate to={"../"} />
            }
          />
          <Route path="/category/:category" element={<CategoryProduct />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="/product/:id" element={<ProductSingle />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
