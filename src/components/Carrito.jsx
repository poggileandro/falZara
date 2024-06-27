import React, { useContext } from 'react';
import { cartContext } from '../context/cartcontext';
import { Link } from 'react-router-dom';

export const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(cartContext);

  // Función para agrupar productos por id y sumar cantidades
  const agruparProductos = (carrito) => {
    const agrupados = carrito.reduce((acc, producto) => {
      const existente = acc.find((p) => p.id === producto.id);
      if (existente) {
        existente.cantidad += producto.cantidad;
      } else {
        acc.push({ ...producto });
      }
      return acc;
    }, []);
    return agrupados;
  };

  // Obtener el carrito agrupado
  const carritoAgrupado = agruparProductos(carrito);

  return (
    <div>
      {carritoAgrupado.map((prod) => (
        <div key={prod.id}>
          <h1>{prod.nombre}</h1>
          <p>Cantidad: {prod.cantidad}</p> {/* Mostrar la cantidad del producto */}
          <button onClick={() => eliminarProducto(prod)}>X</button>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <Link to="/Finalizar-Compra">Finalizar Compra</Link>
        </>
      ) : (
        <h2>Carrito Vacío :/</h2>
      )}
    </div>
  );
};