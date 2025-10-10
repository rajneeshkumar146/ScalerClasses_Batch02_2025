import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Home'
import Product from './component/Product'
import ProductDetails from './component/ProductDetails'
import PageNotFound from "./component/PageNotFound"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>

        <Route path="/product" element={<Product />}></Route>
        <Route path="/product:id" element={<ProductDetails />}></Route>

        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
