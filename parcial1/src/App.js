import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
function App() {
  return (

    <BrowserRouter>
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
