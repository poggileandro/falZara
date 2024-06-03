import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/productos.json";
import categories from "../data/categorias.json"
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
  let { categoryId }  = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("TODOS LOS PRODUCTOS");

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  };

  useEffect(() => {
      pedirProductos().then((res) => {
        if (!categoryId) {
          setTitulo("TODOS LOS PRODUCTOS");
          setProductos(res);
        } else {
          setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
          setProductos(res.filter((prod) => prod.categoria === categoryId));
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error); 
      });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1 className='titulo'>{ titulo}</h1>
      <ItemList productos={productos} />
    </div>
  );
};