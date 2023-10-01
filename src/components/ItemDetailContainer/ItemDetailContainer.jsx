import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../firebase/config";

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(database, "products", id);
    getDoc(docRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, []);

  return (
    <div>
      <ItemDetail item={item} initial={1} stock={item.stock} />
    </div>
  );
};

export default ItemDetailContainer;
