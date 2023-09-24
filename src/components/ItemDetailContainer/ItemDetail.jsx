import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item, initial, stock }) => {
  const { cart, addCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(initial);

  const handleSubstract = () => {
    quantity > initial && setQuantity(quantity - 1);
  };

  const handleAdd = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  return (
    <div className="products-card">
      <div className="product-detail-main">
        <img
          className="product-detail-main-img"
          src={item.img}
          alt={item.name}
        />
        <div className="product-detail-title-main">
          <h5 className="product-detail-title">{item.name}</h5>
          <p className="product-detail-price">U$D {item.price}</p>
          <ItemCount
            handleSubstract={handleSubstract}
            handleAdd={handleAdd}
            handleAddCart={() => {
              addCart(item, quantity);
            }}
            quantity={quantity}
            stock={item.stock}
          />
        </div>
      </div>
      <div className="game-title-detail">
        <p className="product-detail-description">{item.description}</p>
      </div>
      <div className="product-detail-container-trailer">
        <iframe
          src={item.video}
          className="product-detail-trailer"
          allowFullScreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="product-detail-container-images">
        <img className="product-detail-image" src={item.img2} alt={item.name} />
        <img className="product-detail-image" src={item.img3} alt={item.name} />
      </div>
      <div className="product-detail-container-images">
        <img className="product-detail-image" src={item.img4} alt={item.name} />
        <img className="product-detail-image" src={item.img5} alt={item.name} />
      </div>
    </div>
  );
};

export default ItemDetail;
