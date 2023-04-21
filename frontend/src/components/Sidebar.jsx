import React from 'react';
import { Link } from "react-router-dom";


function Sidebar() {

  return (
    <div className="drawer-side border-2 border-blue-500">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 bg-base-100 text-neutral text-xl font-semibold">
        {/* <!-- Sidebar content here --> */}
        <li>
            <Link to="home"><i className="fa-solid fa-house-chimney"></i>Home</Link> 
        </li>
        <li>
            <Link to="inventory"><i className="fa-solid fa-boxes-stacked"></i>Inventory</Link>
        </li>
        <li>
            <Link to="sales"><i className="fa-solid fa-tags"></i>Sales</Link>
        </li>
        <li>
          <Link to="generate-barcode"><i className="fa-solid fa-barcode"></i>Barcode Maker</Link>
        </li>
      </ul>
    </div>
  ) 
}
export default Sidebar;