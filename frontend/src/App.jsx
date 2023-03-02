import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';


//pages
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;