import React, { useContext, useState } from 'react'
import { cartContext } from '../context/cartcontext'
import { useForm } from 'react-hook-form';
import { collection,addDoc, doc,Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';


export const Checkout = () => {
  const {carrito, calcularTotal, vaciarCarrito} = useContext(cartContext);
 const {register, handleSubmit} = useForm();
 let [docId , setDocId] = useState("");
 const comprar = (data)=>{
    const pedido = {
        cliente: data,
        productos: carrito,
        total: calcularTotal(),
        fecha: Timestamp.now()

    }
    const pedidosRef  = collection(db,"pedidos");
    addDoc(pedidosRef, pedido).then((doc)=> setDocId(doc.id));
    vaciarCarrito();
 } 

 if(docId){
  return(
    <>
    <h1>Su compra ha sido realizada </h1>
    <p>El numero de seguimiento es: {docId}</p>
    </>
  )
 }
  return (
    <div>
        <form onSubmit={handleSubmit(comprar)}>
            <input type='text' placeholder='Ingrese su Nombre' {...register("nombre")}/>
            <input type='email' placeholder='Ingrese su Mail' {...register("email")}/>
            <button type='submit'>Comprar</button>
        </form>
    </div>
  )
}
