import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import { Home } from './component/home';
import { Login } from './component/Login';


function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
    </>
  );
}

export default App;
