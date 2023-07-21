import ProductForm from './components/ProductForm';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/main';
import ProductDetails from './components/productDetails';
import Update from './components/Update.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element = {<Main/>} path='/product'/>
        <Route element = {<ProductDetails/>} path = '/product/:id'/>
        <Route element = {<Update/>} path='/product/edit/:id' />
      </Routes>
    </div>
  );
}

export default App;
