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
//Change index name and reroute everything to a dashboard page
import Index from './pages';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales'



function App() {
  //Eventually move most (if not all) state into an object for better organization
  const [soldItems, setSoldItems] = useState([])
  const [inventory, setInventory] = useState([])
  const [latestTransactions, setLatestTransactions] = useState([])
  const [product, setProduct] = useState({})
  const [camera, setCamera] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false)
  const [showTable, setShowTable] = useState(true)
  const [graphOptions, setGraphOptions] = React.useState(
    {
    chart: {
      type: "area",
      height: 350
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    series: [
      {
        name: "Monthly Sales",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  });

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
    const scannedItem = inventory.find((item) => item.id == result)
    const dateSold = new Date()
    setSoldItems((prevSoldItems) => [...prevSoldItems, 
      {
        ...scannedItem,
        date: dateSold
      }])
    
    Quagga.offDetected()
    Quagga.stop()
    toggleCamera()
    setTimeout(() => {
      toggleCamera()
    }, 1000) 
  }


  function updateOnCompleteOrder() {
    let totalSum = soldItems.reduce((sum, current) => sum + current.cost, 0)
    setGraphOptions((prevGraphOptions) => {
      let prevArr = [...prevGraphOptions.series[0].data]
      prevArr[soldItems[0].date.getMonth()] = totalSum
      return (
        {...prevGraphOptions,
          series: [
            {
              name: "Monthly Sales",
              data: prevArr
            }
          ]
        }
      )
    })

    // Toggles the UI of the Sales page
    toggleOrderComplete()
    setShowTable((prevShowTable) => !prevShowTable)



    setLatestTransactions((prevLatestTransactions) => 
    [...prevLatestTransactions, ...soldItems])
  }  
  

  function toggleOrderComplete() {
    setOrderComplete((prevOrderComplete) => !prevOrderComplete)
  }
  
  // ~~After complete order~~
  // reflect the graph - [x]
  // decrement qty from inventory page - []
  // reflect the recent transactions in the dashboard page - [x]
  // as well as the stats on the dashboard page - []
  
  
  return (

      <div className='main-container'>
        <Navbar />
        <div id='drawer' className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <Sidebar />
          <div className="drawer-content flex flex-col">
          {/* <!-- Right page content here --> */}         
            <Routes>
              <Route 
              path="/dashboard" 
              element={
              <Home 
                inventory={inventory}
                soldItems={soldItems}
                graphOptions={graphOptions}
                latestTransactions={latestTransactions}
              />
              } />
              <Route 
                path="inventory" 
                element={
                <Inventory 
                  inventory={inventory}
                  addProduct={addProduct}
                  deleteProduct={deleteProduct}
                  handleId={handleId}/>
                } 
              />
                <Route 
                path='sales' 
                element={
                  <Sales 
                    toggleCamera={toggleCamera}
                    soldItems={soldItems}
                    updateOnCompleteOrder={updateOnCompleteOrder}
                    orderComplete={orderComplete}
                    toggleOrderComplete={toggleOrderComplete}
                    showTable={showTable}
                  />
                } 
              />
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
            soldItems={soldItems}
          />
        </div>

      </div>

  );
  
}

export default App;