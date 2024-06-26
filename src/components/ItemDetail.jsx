import React from 'react'

export const ItemDetail = ({producto}) => {
  return (
    <div>
    <img className='producto-imagen' src={producto.imagen} alt={producto.nombre} />
    <h1>{producto.nombre}</h1>
    <p>{producto.descripcion}</p>
    <p>${producto.precio}</p>
    <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}
