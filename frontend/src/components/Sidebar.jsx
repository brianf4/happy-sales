import React from 'react';
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="inventory">Inventory</Link></li>
        <li><a>Sales</a></li>
      </ul>
    </div>
  ) 
}
export default Sidebar;
