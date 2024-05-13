import React from 'react'
import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'

export const Header = () => {
  return (
   <header className='Header'>
    <Logo/>
    <NavBar/>
    <Carrito/>
   </header>
  )
}
