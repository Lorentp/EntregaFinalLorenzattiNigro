import "./App.css";
import "./components/NavBar/NavBar.css";
import "./components/ItemListContainer/ItemListcontainer.css";
import "./components/CartWidget/CartWidget.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
