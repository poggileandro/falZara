import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/header/Header'
import { Notfound } from './components/Notfound'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { CartProvider } from './context/cartcontext'
import { Checkout } from './components/Checkout'
import { Carrito } from './components/Carrito'
import { Footer } from './components/Footer'



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/Finalizar-Compra' element={<Checkout/>}/>
            <Route path="/*" element={<Notfound />}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
      
  )
}

export default App
