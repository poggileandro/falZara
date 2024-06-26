import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from "../firebase/config";

export const ItemListContainer = () => {
  let { categoryId }  = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("TODOS LOS PRODUCTOS");

  

  useEffect(() => {
    const productosref = collection(db, 'productos');
    const q = categoryId ? query(productosref, where('categoria.id', '==', categoryId)): productosref;
    getDocs(q)
      .then((res) => {
        setProductos(
          res.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((error) => {
        console.error('Error fetching documents: ', error);
      });

    if (categoryId) {
      setTitulo(`${categoryId}`.toUpperCase());
    } else {
      setTitulo('TODOS LOS PRODUCTOS');
    }
  }, [categoryId]);
  return (
    <div className="item-list-container">
      <h1 className='titulo'>{ titulo}</h1>
      <ItemList productos={productos} />
    </div>
  );
};