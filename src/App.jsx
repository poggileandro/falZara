import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/header/Header'

function App() {
 

  return (
    <BrowserRouter>
  
    <Header/>
    <Routes>
    <Route path="/" element={<ItemListContainer />}/>
    <Route path="/category/:categoryId" element={<ItemListContainer />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
