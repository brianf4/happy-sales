import React from 'react';

function Sidebar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li><a>Dashboard</a></li>
        <li><a>Inventory</a></li>
      </ul>
        
    </div>
  )
}
export default Sidebar;
