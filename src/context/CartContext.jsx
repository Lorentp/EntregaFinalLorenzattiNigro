import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartInitial = JSON.parse(localStorage.getItem("cart")) || [];
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item, quantity) => {
    const AddedItem = { ...item, quantity };
    const newCart = [...cart];
    const IsItInCart = newCart.find((product) => product.id === AddedItem.id);
    if (IsItInCart) {
      IsItInCart.quantity = IsItInCart.quantity + quantity;
    } else {
      newCart.push(AddedItem);
    }
    setCart(newCart);
  };

  const cartNumber = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  return (
    <CartContext.Provider
      value={{ cart, addCart, cartNumber, totalPrice, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
