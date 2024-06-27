import { createContext, useState } from "react";

export const cartContext  = createContext();

export const CartProvider = ({children})=>{
    const [carrito, setCarrito ] = useState([]);

    const agregarAlCarrito = (producto) =>{
     setCarrito([...carrito , producto])
    }
   
    const cantidadCarrito = ()=>{
     return carrito.length
    }
   
    const calcularTotal = ()=>{
     return carrito.reduce((acc,prod) => acc + prod.precio, 0 )
    }
   
    const vaciarCarrito = ()=> {
     setCarrito([]);
    } 

    return(
        <cartContext.Provider value={{carrito,agregarAlCarrito,cantidadCarrito,calcularTotal,vaciarCarrito}}>
            {children}
        </cartContext.Provider>
    )

}