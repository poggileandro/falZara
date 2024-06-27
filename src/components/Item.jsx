import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../context/cartcontext';


export const Item = ({ producto }) => {
    const {agregarAlCarrito}  = useContext(cartContext);
    return (
        <div className='producto'>
            <img className='producto-imagen' src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p> ${producto.precio}</p>
            <Link to={`/item/${producto.id}`}>Ver Detalle</Link>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>      
        </div>
    )
}