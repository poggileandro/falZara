import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const ItemDetailContainer = () => {
  let { itemId } = useParams();
  let [producto, setProducto] = useState(undefined);
  let error = false;

  useEffect(() => {
   const docref =  doc(db,"productos",itemId);
   getDoc(docref).then(res =>{
    setProducto({...res.data(), id: res.id})
   } )
    
  }, [itemId]);

  if(producto){
    return <ItemDetail producto={producto}/>
  }else if (error){
    return <div>Hubo un Error</div>
  }else{
    <div>Cargando...</div>
  }
};