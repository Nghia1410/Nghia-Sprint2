import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import { Login } from './component/Login';
import { Home } from './component/home';
import { Shop } from './component/Shop';
import { Detail } from './component/Detail';


function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/api/login' element={<Login/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/detail/:id' element={<Detail/>}/>
  </Routes>
    </>
  );
}

export default App;
