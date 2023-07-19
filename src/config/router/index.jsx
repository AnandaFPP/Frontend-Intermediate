import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../../pages/Auth/Login'
import Register from '../../pages/Auth/Register'
import Reset from '../../pages/Auth/Reset'
import Order from '../../pages/Order'
import Checkout from '../../pages/Checkout/Checkout'
import Page404 from '../../pages/Page404'
import Detail from '../../pages/Detail/Detail'
import Product from '../../pages/Product'
import Profile from '../../pages/Profile/Profile'
import ProfileSeller from '../../pages/ProfileSeller/ProfileSeller'

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Navigate to="/home" replace="true"/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/product/:id' element={<Detail/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/reset' element={<Reset/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/seller' element={<ProfileSeller/>}/>
              <Route path='/order' element={<Order/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/*' element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router