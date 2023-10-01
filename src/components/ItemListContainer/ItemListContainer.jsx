import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase/config.js";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    const prodRef = collection(database, "products");
    const q = category
      ? query(prodRef, where("category", "==", category))
      : prodRef;
    getDocs(q).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  return <ItemList products={products} />;
};

export default ItemListContainer;
