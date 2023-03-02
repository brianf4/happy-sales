import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';



//pages
import Home from './pages/Home';
import Inventory from './pages/Inventory';

function App() {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile border-2 border-violet-600">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="border-2 border-amber-800 drawer-content flex flex-col">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="inventory" element={<Inventory />} />
        </Routes>
        </div>
        <Sidebar />

        
      </div>
    </div>
  );
}

export default App;