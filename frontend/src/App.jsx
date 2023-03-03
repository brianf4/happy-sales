import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Popup from './components/Popup';

//pages
import Home from './pages/Home';
import Inventory from './pages/Inventory';

function App() {
  return (
    <div className='h-full'>
      <Navbar />
      <div className="drawer drawer-mobile border-2 border-violet-600 h-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
        {/* <!-- Right page content here --> */}         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="inventory" element={<Inventory />} />
          </Routes>
        </div>
        <Sidebar />
        
        
      </div>
      <Popup />
    </div>
  );
}

export default App;