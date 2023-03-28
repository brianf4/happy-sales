import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AddPopup from './components/AddPopup';
import DeletePopup from './components/DeletePopup';
import EditPopup from './components/EditPopup';
import ItemsSoldPopup from './components/ItemsSoldPopup';
import Quagga from 'quagga';

//pages
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales'


function App() {
  const [soldItems, setSoldItems] = useState([])
  const [inventory, setInventory] = useState([])
  const [product, setProduct] = useState({})
  const [camera, setCamera] = useState(false);

  async function fetchInventory() {
    const res = await fetch('http://localhost:4000/api/inventory')
    const data = await res.json()
    if (res.ok) {
      setInventory(data)
    }
  }

  useEffect (() => {
    
    
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
  function updateInventory(product) {
    setInventory(product)
  }

  //This function grabs/handles the id of the delete & edit button. Finds the inventory state to update ui and sends it to the modal popup component to delete or edit inventory product
  function handleId(id) {
    const product = inventory.find(product => product._id === id)
    setProduct(product)
  }
  
  function toggleCamera() {
    setCamera((prevSetCamera) => !prevSetCamera)
  }

  function onDetected(result) {

    soldItems.includes(result) ? null : setSoldItems((prevSoldItems) => [...prevSoldItems, result]);
    Quagga.offDetected()
    Quagga.stop()
    toggleCamera()
    setTimeout(() => {
      toggleCamera()
    }, 1000)
    
  }

  console.log(soldItems)

  return (
    <div className='main-container'>
      <Navbar />
      <div id='drawer' className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <Sidebar />
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
              handleId={handleId}
            />
            } />
            <Route path='sales' element={<Sales toggleCamera={toggleCamera} />} />
          </Routes>
        </div>
        
        <AddPopup 
          addProduct={addProduct}
        /> 
        <DeletePopup 
          product={product}
          deleteProduct={deleteProduct}
        />   
        <EditPopup 
          product={product}
          inventory={inventory}
          updateInventory={updateInventory}
          fetchInventory={fetchInventory}
        />
        <ItemsSoldPopup 
          camera={camera}
          toggleCamera={toggleCamera}
          onDetected={onDetected}
        />
      </div>

    </div>

  );
}

export default App;