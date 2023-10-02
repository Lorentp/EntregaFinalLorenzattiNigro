import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, doc } from "firebase/firestore";
import { database } from "../../firebase/config";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, emptyCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const send = (form) => {
    const order = {
      client: form,
      products: cart,
      total: totalPrice(),
    };

    const orderRef = collection(database, "orders");
    addDoc(orderRef, order).then((doc) => {
      setOrderId(doc.id);
      emptyCart();
    });
  };

  if (orderId) {
    return (
      <div className="container">
        <h1>Muchas Gracias por tu comprar</h1>
        <h1>Esta es tu orden de comprar: {orderId}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1> Completa tus datos para finalizar tu compra </h1>
      <form onSubmit={handleSubmit(send)}>
        <div>

        <input
          type="text"
          placeholder="Indicanos tu nombre"
          {...register("name")}
          />
        <input
          type="email"
          placeholder="Indicanos tu email"
          {...register("email")}
          />
        <input
          type="phone"
          placeholder="Indicanos tu celular"
          {...register("phone")}
          />
          </div>
        <button className="buy-button" type="sumbit">Comprar</button>
      </form>
    </div>
  );
};

export default Checkout;
