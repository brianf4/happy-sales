import React from 'react';
import { Link } from "react-router-dom";


function Sidebar() {

  return (
    <div className="drawer-side border-2 border-blue-500">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 bg-base-100 text-neutral text-xl font-semibold">
        {/* <!-- Sidebar content here --> */}
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="inventory">Inventory</Link></li>
        <li><Link to="sales">Sales</Link></li>
      </ul>
    </div>
  ) 
}
export default Sidebar;