import { useEffect, useState } from "react";
import { getData } from "../../helper/data.js";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setProducts(res);
    });
  }, []);

  return <ItemList products={products} />;
};

export default ItemListContainer;
