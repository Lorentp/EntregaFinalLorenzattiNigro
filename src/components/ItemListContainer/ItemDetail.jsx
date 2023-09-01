const ItemDetail = ({ item }) => {
  return (
    <div className="products-card">
      <img src={item.img} alt={item.name} />
      <div className="game-title">
        <h5>{item.name}</h5>
        <p>{item.price}</p>
        <p>{item.description}</p>
      </div>
      <iframe
        src={item.video}
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default ItemDetail;
