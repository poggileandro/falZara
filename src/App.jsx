import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/header/Header'
import { Notfound } from './components/Notfound'
import { ItemDetailContainer } from './components/ItemDetailContainer'

function App() {
 

  return (
    <BrowserRouter>
  
    <Header/>
    <Routes>
    <Route path="/" element={<ItemListContainer />}/>
    <Route path="/category/:categoryId" element={<ItemListContainer />}/>
    <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
    <Route path="/*" element={<Notfound />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
