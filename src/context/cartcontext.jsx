import { createContext, useState } from "react";

export const cartContext  = createContext();

export const CartProvider = ({children})=>{
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
      const index = carrito.findIndex((item) => item.id === producto.id);
      if (index !== -1) {
        const carritoActualizado = [...carrito];
        carritoActualizado[index].cantidad += producto.cantidad || 1; 
        setCarrito(carritoActualizado);
      } else {
        setCarrito([...carrito, { ...producto, cantidad: producto.cantidad || 1 }]);
      }
    };
  
    const cantidadCarrito = () => {
      return carrito.reduce((total, prod) => total + prod.cantidad, 0);
    };
  
    const eliminarProducto = (producto) => {
      const carritoFiltrado = carrito.filter((prod) => prod.id !== producto.id);
      setCarrito(carritoFiltrado);
    };
  
    const calcularTotal = () => {
      return carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    };
  
    const vaciarCarrito = () => {
      setCarrito([]);
    };
  
    return (
      <cartContext.Provider
        value={{ carrito, agregarAlCarrito, cantidadCarrito, calcularTotal, vaciarCarrito, eliminarProducto }}
      >
        {children}
      </cartContext.Provider>
    );

}