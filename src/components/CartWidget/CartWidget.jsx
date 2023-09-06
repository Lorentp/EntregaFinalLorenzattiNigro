import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/carrito">
      <div className="cart-button">
        🛒
        <span id="number">0</span>
      </div>
    </Link>
  );
}

export default CartWidget;
