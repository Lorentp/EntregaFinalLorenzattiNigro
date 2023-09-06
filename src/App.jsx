import "./App.css";
import "./components/NavBar/NavBar.css";
import "./components/ItemListContainer/ItemListcontainer.css";
import "./components/CartWidget/CartWidget.css";
import "./components/ItemDetailContainer/ItemDetailContainer.css";
import "./components/ItemDetailContainer/ItemCount.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./components/cartWidget/cartWidget";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
