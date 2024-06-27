import React, { useContext } from 'react'
import { cartContext } from '../context/cartcontext'

export const Cart = () => {
const {carrito , calcularTotal , vaciarCarrito}  = useContext(cartContext);


return (
    <div>
      {carrito.map((prod) => <h1 key={prod.id}>{prod.nombre}</h1>)}
      {
        carrito.length > 0 ? 
        <>
          <h2>total: ${calcularTotal()}</h2>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </> :
        <h2>Carrito Vacio:/</h2>
      }
    </div>
  )
}
