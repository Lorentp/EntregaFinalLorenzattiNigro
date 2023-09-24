import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, totalPrice, emptyCart } = useContext(CartContext);
  return (
    <>
      <h1>Finaliza tu Compra</h1>

      {cart.map((prod) => (
        <div key={prod.id} className="cart-product">
          <img className="cart-img" src={prod.img} alt={prod.name} />

          <div>
            <h4>Producto</h4>
            <h2>{prod.name}</h2>
          </div>

          <div>
            <h4>Cantidad</h4>
            <h2>{prod.quantity}</h2>
          </div>

          <div>
            <h4>Precio</h4>
            <h2>${prod.price}</h2>
          </div>

          <div>
            <h4>Eliminar</h4>
            <button className="trash-can">
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>

          <div>
            <h4>Subtotal</h4>
            <h2>${prod.price * prod.quantity}</h2>
          </div>
        </div>
      ))}
      <div className="finish-buy-container">
        <button className="finish-buy-button">Comprar</button>
        <h2>Total: ${totalPrice()}</h2>
        <button onClick={emptyCart}>Limpiar Carrito</button>
      </div>
    </>
  );
};

export default Cart;
