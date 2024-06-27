import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import {db} from "../../firebase/config";


export const NavBar = () => {
let [categories,setcategories] = useState([]);
const catref = collection(db, "categorias");

getDocs(catref)
.then((res)=>{
 setcategories( res.docs.map((doc)=>{
  return{...doc.data()}
 }));
})


  return (
    <nav className='NavBar'>
      <ul className='Menu'>
        <li className='Menu-Item'>
          <NavLink to="/" activeclassname="active" className="nav-link">INICIO</NavLink>
        </li>
        {categories.map((category) => (
          <li key={category.id} className='Menu-Item'>
            <NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link">{category.nombre}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}