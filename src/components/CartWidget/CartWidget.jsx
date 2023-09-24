import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { cartNumber } = useContext(CartContext);
  return (
    <Link to="/carrito">
      <div className="cart-button">
        🛒
        <span id="number"> {cartNumber()}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
