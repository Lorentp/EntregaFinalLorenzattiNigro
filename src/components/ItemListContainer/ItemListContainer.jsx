import { useEffect, useState } from "react";
import { getData } from "../../helper/data.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const category = useParams().category;
  console.log(category);

  useEffect(() => {
    getData().then((res) => {
      if (category) {
        setProducts(res.filter((prod) => prod.category.id === category));
      } else {
        setProducts(res);
      }
    });
  }, [category]);

  return <ItemList products={products} />;
};

export default ItemListContainer;
