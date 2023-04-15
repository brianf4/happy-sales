import React from "react";
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer';
import AddPopup from '../components/AddPopup';
import DeletePopup from '../components/DeletePopup';
import EditPopup from '../components/EditPopup';
import ItemsSoldPopup from '../components/ItemsSoldPopup';
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";




function Dashboard(props) {
  return (
    <div>
      <Navbar />
      <div id='drawer' className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <Sidebar />
            <div className="drawer-content flex flex-col">
            {/* <!-- Right page content here --> */}
            <Outlet />  
            </div>
            <AddPopup 
              addProduct={props.addProduct}
            /> 
            <DeletePopup 
              product={props.product}
              deleteProduct={props.deleteProduct}
            />   
            <EditPopup 
              product={props.product}
              inventory={props.inventory}
              updateInventory={props.updateInventory}
              fetchInventory={props.fetchInventory}
            />
            <ItemsSoldPopup 
              camera={props.camera}
              toggleCamera={props.toggleCamera}
              onDetected={props.onDetected}
              soldItems={props.soldItems}
            />
      </div>
    </div>
    
  )
}
export default Dashboard