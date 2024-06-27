import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const ItemDetailContainer = () => {
  let { itemId } = useParams();
  let [producto, setProducto] = useState(undefined);
  let [Loading,setLoading] = useState(true);

  useEffect(() => {
   const docref =  doc(db,"productos",itemId);
   getDoc(docref).then(res =>{
    if(res.data()){
      setProducto({...res.data(), id: res.id})
    }
    setLoading(false);
   } )
    
  }, [itemId]);

  if(Loading){
    return <div>Cargando...</div>
  }else if (producto){
    return <ItemDetail producto={producto}/>
  }else{
     return <div>Producto no Encontrado</div>
  }
};