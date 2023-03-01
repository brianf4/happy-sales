import React from "react";

function Navbar() {
  return (


    <div className="navbar bg-primary text-primary-content">
      <label htmlFor="my-drawer-2" className="btn btn-primary btn-outline drawer-button lg:hidden self-start border-none rounded-none rounded-br-lg">
        <i class="fa-solid fa-bars fa-lg text-primary-content"></i>
      </label>
  
      <a className="btn btn-ghost normal-case text-xl">Happy Sales</a>
    </div>
  )
}
export default Navbar