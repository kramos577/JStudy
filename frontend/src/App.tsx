import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Genki from './Genki';
import Homepage from './Homepage';

// Router should live in app since I'm not doing any complicated routing
// Navbar needs to be in browser router because of all routing must happen in a routing

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar/>
          <Routes>
              <Route path="/" element={
                  <Homepage/>
              }/>
              
              <Route path="/genki" element={
                  <Genki/>
              }/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
