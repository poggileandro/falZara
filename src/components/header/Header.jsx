import React from 'react'
import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { CardWidget } from './CardWidget'


export const Header = () => {
  return (
   <header className='Header'>
    <Logo/>
    <NavBar/>
    <CardWidget/>
   </header>
  )
}
