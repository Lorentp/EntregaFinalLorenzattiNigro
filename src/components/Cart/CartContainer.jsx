import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";

const CartContainer = () => {
  const { cart, totalPrice, emptyCart,  } = useContext(CartContext);

 

    return (
      <>
      <h1>Finaliza tu Compra</h1>

      {cart.map((prod) => (
        <Cart prod={prod} key={prod.id} />
        ))}
      <div className="finish-buy-container">
        <h2>Total: ${totalPrice()}</h2>
        <button onClick={emptyCart} className="empty-cart-button">Limpiar Carrito</button>
        <Link to="/checkout">
          {<button className="finish-buy-button">Comprar</button>}
        </Link>
      </div>
    </>
  );

  

  
};

export default CartContainer;
