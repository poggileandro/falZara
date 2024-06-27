import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/header/Header'
import { Notfound } from './components/Notfound'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/cart'
import { CartProvider } from './context/cartcontext'
import { Checkout } from './components/Checkout'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/Finalizar-Compra' element={<Checkout/>}/>
            <Route path="/*" element={<Notfound />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      
  )
}

export default App
