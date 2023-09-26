import "./App.css";
import "./components/NavBar/NavBar.css";
import "./components/ItemListContainer/ItemListContainer.css";
import "./components/CartWidget/CartWidget.css";
import "./components/ItemDetailContainer/ItemDetailContainer.css";
import "./components/ItemDetailContainer/ItemCount.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/Cart/Cart.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartContext, CartProvider } from "./context/CartContext";
import { useState } from "react";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/productos/:category"
              element={<ItemListContainer />}
            />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
