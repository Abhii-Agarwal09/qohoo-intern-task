import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import Product from './pages/Product';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all" element={<AllProducts />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
