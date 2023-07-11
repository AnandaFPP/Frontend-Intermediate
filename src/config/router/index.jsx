import React from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../../pages/Auth/Login'
import Register from '../../pages/Auth/Register'
import Order from '../../pages/Order'
import Checkout from '../../pages/Checkout'
import Page404 from '../../pages/Page404'
import Detail from '../../pages/Detail'
import Product from '../../pages/Product'

const Router = () => {
  return (
    <>
        <BrowserRouter>
            {/* <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/product'>Products</Link></li>
                <li><Link to='/product/1'>Detail</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/order'>Order</Link></li>
                <li><Link to='/checkout'>Checkout</Link></li>
            </ul> */}
            <Routes>
              <Route path='/' element={<Navigate to="/home" replace="true"/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/product/:id' element={<Detail/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/order' element={<Order/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/*' element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router