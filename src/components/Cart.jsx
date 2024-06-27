import React, { useContext } from 'react'
import { cartContext } from '../context/cartcontext'
import { Link } from 'react-router-dom';

export const Cart = () => {
const {carrito , calcularTotal , vaciarCarrito, eliminarProducto}  = useContext(cartContext);


return (
  <div>
    {
      carrito.map((prod) => 
        <div key={prod.id} >
          <h1>{prod.nombre}</h1>
          <button onClick={() => eliminarProducto(prod)} >X</button>
          
        </div>
      )
    }
    {
      carrito.length > 0 ? 
      <>
        <h2>total: ${calcularTotal()}</h2>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        <Link to="/Finalizar-Compra">Finalizar Compra</Link>
      </> :
      <h2>Carrito Vacío :/</h2>
    }
  </div>
)
}
