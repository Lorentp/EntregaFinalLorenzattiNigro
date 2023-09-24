import "./App.css";
import "./components/NavBar/NavBar.css";
import "./components/ItemListContainer/ItemListcontainer.css";
import "./components/CartWidget/CartWidget.css";
import "./components/ItemDetailContainer/ItemDetailContainer.css";
import "./components/ItemDetailContainer/ItemCount.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/Cart/Cart.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartContext } from "./context/CartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addCart = (item, quantity) => {
    const AddedItem = { ...item, quantity };
    const newCart = [...cart];
    const IsItInCart = newCart.find((product) => product.id === AddedItem.id);
    if (IsItInCart) {
      IsItInCart.quantity = IsItInCart.quantity + quantity;
    } else {
      newCart.push(AddedItem);
    }
    setCart(newCart);
  };

  const cartNumber = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };
  return (
    <>
      <CartContext.Provider value={{ cart, addCart, cartNumber }}>
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
      </CartContext.Provider>
    </>
  );
}

export default App;
