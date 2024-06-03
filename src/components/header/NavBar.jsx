import React from 'react';
import { NavLink } from 'react-router-dom';
import categorias from "../../data/categorias.json";

export const NavBar = () => {
  return (
    <nav className='NavBar'>
      <ul className='Menu'>
        <li className='Menu-Item'>
          <NavLink to="/" activeclassname="active" className="nav-link">INICIO</NavLink>
        </li>
        {categorias.map((category) => (
          <li key={category.id} className='Menu-Item'>
            <NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link">{category.nombre}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}