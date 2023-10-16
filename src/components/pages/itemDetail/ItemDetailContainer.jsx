import { useEffect, useState } from "react";
import { productos } from "../../../data/productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams()

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      resolve(productos), reject("Ups! Algo salio mal");
      // window.scrollTo(0, 0)
    });

    getProducts.then((res) => {
      let producto = res.find((elemento) => elemento.id === +id);
      setProductSelected(producto);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productoConCantidad = {
      ...productSelected,
      quantity: cantidad,
    };
    console.log("Este es el productos que se agrega", productoConCantidad);
  };

  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailContainer;
