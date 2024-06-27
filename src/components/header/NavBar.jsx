import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const catref = collection(db, "categorias");
      try {
        const querySnapshot = await getDocs(catref);
        const categoriesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories: ', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className='NavBar'>
      <ul className='Menu'>
        <li className='Menu-Item'>
          <NavLink exact to="/" activeClassName="active" className="nav-link">INICIO</NavLink>
        </li>
        {categories.map((category) => (
          <li key={category.id} className='Menu-Item'>
            <NavLink to={`/category/${category.id}`} activeClassName="active" className="nav-link">{category.nombre}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};