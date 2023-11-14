import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Encabezado } from "../../common/encabezado/Encabezado";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const ItemListContainer = () => {
  window.scrollTo(0, 0);

  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "productos");
    let consulta;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(newArray);
    });

    window.scrollTo(0, 0);
  }, [categoryName]);

  return (
    <>
      <Encabezado />
      {items.length === 0 ? (
        <div class="spinnerContainer">
          <div class="spinner"></div>
          <div class="loader">
            <p>loading</p>
            <div class="words">
              <span class="word">Guitarras</span>
              <span class="word">Guitarras</span>
              <span class="word">Guitarras</span>
            </div>
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
