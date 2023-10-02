import "./App.css";
import "./components/NavBar/NavBar.css";
import "./components/ItemListContainer/ItemListContainer.css";
import "./components/CartWidget/CartWidget.css";
import "./components/ItemDetailContainer/ItemDetailContainer.css";
import "./components/ItemDetailContainer/ItemCount.css";
import "./components/Checkout/Checkout.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/Cart/Cart.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/Cart/CartContainer";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

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
            <Route path="/carrito" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
