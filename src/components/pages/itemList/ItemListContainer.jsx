import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { productos } from "../../../data/productos";
import { Encabezado } from "../../common/encabezado/Encabezado";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const productosFiltrados = productos.filter( product => product.category === categoryName)
    const tarea = new Promise((resolve, reject) => {
      resolve( categoryName ? productosFiltrados : productos), reject("Ups! Algo salio mal");
    // window.scrollTo(0, 0)
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <>
      <Encabezado />
      <ItemList items={items} />;
    </>
  );
};

export default ItemListContainer;
