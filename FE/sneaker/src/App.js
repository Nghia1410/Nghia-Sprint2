import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom'
import { Login } from './component/Login';
import { Home } from './component/home';
import { Shop } from './component/Shop';
import { Detail } from './component/Detail';
import { Cart } from './component/Cart';
import { Header } from './component/Header';
import { QuantityProvider } from './component/QuantityContext';
import { History } from './component/History';
import Employee from './component/Employee';


function App() {
  return (
    <>
      <QuantityProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/history' element={<History />} />
          <Route path='/cart/:username' element={<Cart />} />
          <Route path='/employee' element={<Employee />} />
        </Routes>
      </QuantityProvider>

    </>
  );
}

export default App;
