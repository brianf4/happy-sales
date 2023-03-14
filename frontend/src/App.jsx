import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddPopup from './components/AddPopup';


//pages
import Home from './pages/Home';
import Inventory from './pages/Inventory';


function App() {
  const [inventory, setInventory] = useState([])

  useEffect (() => {
    async function fetchInventory() {
      const res = await fetch('http://localhost:4000/api/inventory')
      const data = await res.json()
      if (res.ok) {
        setInventory(data)
      }
    }
    
    fetchInventory()
  }, [])

  function addProduct(value) {
    setInventory((prevInventory) => {
      return [...prevInventory, value]
    })

  }

  async function deleteProduct(productId) {
    const res = await fetch('http://localhost:4000/api/inventory/' + productId, 
    {
      method: 'DELETE'
    })
    const data = await res.json()
    
    setInventory((prevInventory) => prevInventory.filter(item => item._id !== data._id))
    console.log(productId)
  }
  //This function is grabbing the id of each item and sending it to the modal popup to know what item is being deleted. 
  // const itemId = null;
  // function grabItemId(id) {
  //   itemId = id
  //   console.log(itemId)
  // }
  

  return (

    <div className='h-full'>
      <Navbar />
      <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
        {/* <!-- Right page content here --> */}         
          <Routes>
            
            <Route path="/" 
            element={
            <Home 
              inventory={inventory}
            />
            } />
            <Route 
              path="inventory" 
              element={
            <Inventory 
              inventory={inventory}
              addProduct={addProduct}
              deleteProduct={deleteProduct}
            />
            } />
          </Routes>
        </div>
        <Sidebar />
        <AddPopup 
          addProduct={addProduct}
          />  
      </div>
      
    </div>

  );
}

export default App;