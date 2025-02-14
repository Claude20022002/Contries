import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Pages/Home';
import About from '../Pages/About';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/*Le path="*" fonctionne si jamais l'URL ne correspond à rien de déclaré au dessus*/}
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;