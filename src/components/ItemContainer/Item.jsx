const Item = ({ product }) => {
  return (
    <div className="products-card">
      <img src={product.img} alt={product.name} />
      <div className="game-title">
        <h5>{product.name}</h5>
        <p>{product.price}</p>
      </div>
      <button onClick="" className="button-add button-index" id={product.id}>
        Agregar
      </button>
    </div>
  );
};

export default Item;
