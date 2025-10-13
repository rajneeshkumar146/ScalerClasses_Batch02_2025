import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Home'
import Product from './component/Product'
import ProductDetails from './component/ProductDetails'
import PageNotFound from "./component/PageNotFound"
import Cart from './component/Cart';
import User from './component/User';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Navigate to="/" />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/user" element={<User />}></Route>

        <Route path="/product" element={<Product />}></Route>
        <Route path="/product:id" element={<ProductDetails />}></Route>

        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
