import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import React from 'react'

export const CardWidget = () => {
  return (
    <div className='icono'>
      <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
      <p>1</p>
  </div>

  )
}
