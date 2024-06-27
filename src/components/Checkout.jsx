import React, { useContext } from 'react'
import { cartContext } from '../context/cartcontext'
import { useForm } from 'react-hook-form';
import { collection,addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const Checkout = () => {
  const {carrito, calcularTotal, vaciarCarrito} = useContext(cartContext);
 const {register, handleSubmit} = useForm();
 const comprar = (data)=>{
    const pedido = {
        cliente: data,
        productos: carrito,
        total: calcularTotal()
    }

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
