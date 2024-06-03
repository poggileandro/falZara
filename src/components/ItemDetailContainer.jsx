import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/productos.json";

export const ItemDetailContainer = () => {
    let { itemId } = useParams();
  console.log('ItemId from useParams:', itemId); 
  let [producto, setProducto] = useState(undefined);

  useEffect(() => {
     // Verifica el parámetro id
    if (itemId) {
      const productoEncontrado = data.find((prod) => prod.id === itemId);
      console.log('Producto encontrado:', productoEncontrado);  // Verifica el producto encontrado
      setProducto(productoEncontrado);
    }
  }, [itemId]);

  return (
    <div>{producto ? producto.nombre : "cargando..."}</div>
  );
};