import { useEffect, useState } from "react";
import { getDataDescription } from "../../helper/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    getDataDescription(Number(id)).then((res) => {
      setItem(res);
    });
  }, []);

  return (
    <div>
      <ItemDetail item={item} initial={1} stock={item.stock} />
    </div>
  );
};

export default ItemDetailContainer;
