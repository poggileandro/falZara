import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cartcontext';

export const Item = ({ producto }) => {
  const { agregarAlCarrito } = useContext(cartContext);
  const [cantidad, setCantidad] = useState(1); // Estado local para la cantidad, inicializado en 1

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const handleAgregarAlCarrito = () => {
    // Pasar el producto y la cantidad al contexto de carrito
    agregarAlCarrito({ ...producto, cantidad });
    // Reiniciar la cantidad a 1 después de agregar al carrito
    setCantidad(1);
  };

  return (
    <div className='producto'>
      <img className='producto-imagen' src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p> ${producto.precio}</p>
      <Link to={`/item/${producto.id}`}>Ver Detalle</Link>
      <div className="cantidad-selector">
        <button onClick={decrementarCantidad}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementarCantidad}>+</button>
      </div>
      <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
};