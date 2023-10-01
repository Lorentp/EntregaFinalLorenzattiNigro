
export const Cart = ( {prod})=> {
  
  return (
    <div className="cart-product">
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
            <h4>Subtotal</h4>
            <h2>${prod.price * prod.quantity}</h2>
          </div>
        </div>
  )
}