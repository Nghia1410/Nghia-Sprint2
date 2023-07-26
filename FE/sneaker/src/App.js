import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import { Login } from './component/Login';
import { Home } from './component/home';
import { Shop } from './component/Shop';
import { Detail } from './component/Detail';
import { Cart } from './component/Cart';
import { Header } from './component/Header';


function App() {
  return (
    <>
    <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/api/login' element={<Login/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/detail/:id' element={<Detail/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
    </>
  );
}

export default App;
