import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import RestaurantDetails from "./Pages/RestaurantDetails";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const total = cart.reduce(
    (sum, item) => sum + (item.defaultPrice || 0) / 100,
    0
  );

  return (
    <BrowserRouter>
      <Header
        cartCount={cart.length}
        total={total}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/restaurant/:id"
          element={
            <RestaurantDetails
              addToCart={addToCart}
            />
          }
        />
        <Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      setCart={setCart}
    />
  }
/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;