import React from 'react';
import { Item } from './Item';

export const ItemList = ({productos }) => {
  
  return (
    <div className="ItemList">
      {
      productos.length > 0 ? (
        productos.map(producto => {
          return <Item key={producto.id} producto={producto} />;
        })
      ) : (
        <p>NO CARGAAAA</p>
      )}
    </div>
  );
};