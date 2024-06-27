import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import React, { useContext } from 'react'
import { cartContext } from '../../context/cartcontext';
import { NavLink } from 'react-router-dom';

export const CardWidget = () => {
  const {cantidadCarrito} = useContext(cartContext);
  return (
    <div className='icono'>
      <NavLink to="/Cart" activeclassname="active" className="nav-link"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
      <p>{cantidadCarrito()}</p>
  </div>

  )
}
