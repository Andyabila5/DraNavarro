import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About'; 
import Services from './pages/Services'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/procedimientos" element={<div>Página de Procedimientos</div>} />
      <Route path="/blog" element={<div>Página de Blog</div>} />
    </Routes>
  );
}

export default App;
