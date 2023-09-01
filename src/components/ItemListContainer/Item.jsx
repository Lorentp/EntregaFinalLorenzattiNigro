import { Link } from "react-router-dom";

const Item = ({ product }) => {
  function addOn() {}

  return (
    <div className="products-card">
      <img calssName="product-card-img" src={product.img} alt={product.name} />

      <div className="product-card-title">
        <h5>{product.name}</h5>
        <p>{product.price}</p>
      </div>
      <Link
        className="product-card-depscription-button"
        to={`/producto/${product.id}`}
      >
        Ver Producto
      </Link>
    </div>
  );
};

export default Item;
