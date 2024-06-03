import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
    return (
        <div className='producto'>
            <img src={producto.imagen} alt="" />
            <h2>{producto.nombre}</h2>
            <p> ${producto.precio}</p>
            <Link to={`/item/${producto.id}`}>Ver Detalle</Link>        
            </div>
      )
}
