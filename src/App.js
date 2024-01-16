import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { Categories } from "./components/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { Cart } from "./pages/Cart";

function App() {
  const [products, getProducts] = useState([]);
  const [cart] = useState([]);

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products/").then((res) => {
      getProducts(res.data);
    });
  }, []);
  return (
    <div>
      <Router>
        <NavBar />
        <Categories />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/product/:id"
            element={<ProductPage products={products} setCartItems={cart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
