import "./App.css";
import "./components/Navbar/Navbar.css";
import "./components/ItemContainer/Itemcontainer.css";
import "./components/CartWidget/CartWidget.css";
import Navbar from "./components/Navbar/Navbar";
import Itemcontainer from "./components/ItemContainer/ItemContainer";

function App() {
  return (
    <>
      <Navbar />
      <Itemcontainer imgSrc="" productTitle="" productPrice="" productId="" />
    </>
  );
}

export default App;
