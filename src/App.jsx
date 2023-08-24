import "./App.css";
import "./components/NavBar/NavBar.css";
import "./components/ItemListContainer/ItemListcontainer.css";
import "./components/CartWidget/CartWidget.css";
import NavBar from "./components/NavBar/NavBar";
import Itemcontainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <Itemcontainer />
    </>
  );
}

export default App;
