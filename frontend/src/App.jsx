import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import { appUrl } from '../../backend/common/appUrl';
import Quagga from 'quagga';

//pages
import Dashboard from './pages/Dashboard';
import Index from './pages/Index';
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Inventory from './pages/Inventory';
import Sales from './pages/Sales'
import Barcode from './pages/Barcode';





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

  const {user} = useAuthContext()

  async function fetchInventory() {
    const res = await fetch(`${appUrl}/api/inventory`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const data = await res.json()
    if (res.ok) {
      setInventory(data)
    }
  }

  useEffect(() => {
    if (user) {
      fetchInventory()
    }
  }, [user])

  

  function addProduct(value) {
    setInventory((prevInventory) => {
      return [...prevInventory, value]
    })
  }

  async function deleteProduct(productId) {
    if (!user) {
      return
    }

    const res = await fetch(`${appUrl}/api/inventory/${productId}` ,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(inventory),
      })
    const data = await res.json()

    setInventory((prevInventory) => prevInventory.filter(item => item._id !== data._id))
  }
  function updateInventory(product) {
    setInventory(product)
  }

  //This function grabs/handles the id of the delete & edit button. Finds the inventory state to update ui and sends it to the modal popup component to delete or edit inventory product to the db
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


  
  
  async function updateOnCompleteOrder() {
    let totalSum = soldItems.reduce((sum, current) => sum + current.cost, 0)
    setGraphOptions((prevGraphOptions) => {
      let prevArr = [...prevGraphOptions.series[0].data]
      prevArr[soldItems[0].date.getMonth()] = totalSum
      return (
        {
          ...prevGraphOptions,
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


    //set the latest transactions in the homepage
    setLatestTransactions((prevLatestTransactions) =>
      [...prevLatestTransactions, ...soldItems])

    
    // Comparing sold items from inventory and decrementing accordingly  
    let decrementQty = {}

    for (let i = 0; i < soldItems.length; i++) {
      let productQty = soldItems[i]._id
  
      decrementQty[productQty] ? decrementQty[productQty] += 1 : decrementQty[productQty] = 1
    }      
    
    let inventoryCopy = inventory.slice()

    let newInventory = inventoryCopy.map((item) => {
      return {
        ...item,
        qty: decrementQty[item._id] ? item.qty - decrementQty[item._id] : item.qty
      }
    })
    
    
    const res = await fetch(`${appUrl}/api/inventory` , {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(newInventory),
    })
    const data = await res.json()
    setInventory(data)
  }
  

  function toggleOrderComplete() {
    setOrderComplete((prevOrderComplete) => !prevOrderComplete)
  }

  return (

    <div className='main-container'>
      
      <Routes>
        <Route
          path='/'
          element={<Index />}
        />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to="/dashboard/home" />}
        />
        <Route
          path='/signup'
          element={!user ? <Signup /> : <Navigate to="/dashboard/home" />}
        />
        <Route path='/dashboard'
          element=
          {user && <Dashboard
            soldItems={soldItems}
            inventory={inventory}
            latestTransactions={latestTransactions}
            product={product}
            camera={camera}
            orderComplete={orderComplete}
            showTable={showTable}
            graphOptions={graphOptions}
            fetchInventory={fetchInventory}
            addProduct={addProduct}
            deleteProduct={deleteProduct}
            updateInventory={updateInventory}
            handleId={handleId}
            toggleCamera={toggleCamera}
            onDetected={onDetected}
            updateOnCompleteOrder={updateOnCompleteOrder}
            toggleOrderComplete={toggleOrderComplete}
          /> }>
          <Route path="home" element={<Home 
          inventory={inventory}
          soldItems={soldItems}
          graphOptions={graphOptions}
          latestTransactions={latestTransactions}
          />} />
          <Route path="inventory" element={<Inventory 
          inventory={inventory}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
          handleId={handleId}
          />} />
          <Route path='sales' element={<Sales 
          toggleCamera={toggleCamera}
          soldItems={soldItems}
          updateOnCompleteOrder={updateOnCompleteOrder}
          orderComplete={orderComplete}
          toggleOrderComplete={toggleOrderComplete}
          showTable={showTable}
          />} />
          <Route path='generate-barcode' element={<Barcode />}/>
        </Route>
      </Routes>
    </div>
  );

}

export default App;