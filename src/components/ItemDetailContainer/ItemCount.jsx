const ItemCount = ({
  handleAdd,
  handleSubstract,
  handleAddCart,
  quantity,
  stock,
}) => {
  if (!stock) {
    return (
      <div>
        <h2 className="item-count-nostock">
          Los sentimos, no disponemos de stock!
        </h2>
      </div>
    );
  }
  return (
    <div>
      <h4 className="item-count-stock">Stock disponible: {stock}</h4>
      <div className="item-count">
        <button onClick={handleSubstract} className="item-count-button">
          -
        </button>
        <p className="item-count-number">{quantity}</p>
        <button onClick={handleAdd} className="item-count-button">
          +
        </button>
      </div>
      <div className="item-count-stock-button-cart">
        <button onClick={handleAddCart} className="item-count-addcart">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
