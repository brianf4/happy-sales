import React from "react";

function Navbar() {
  return (


    <div className="navbar bg-primary text-primary-content flex justify-between">
      <div>
        <label htmlFor="my-drawer-2" className="btn btn-primary btn-outline drawer-button lg:hidden self-start border-none rounded-none rounded-br-lg">
          <i className="fa-solid fa-bars fa-lg text-primary-content"></i>
        </label>
    
        <a className="btn btn-ghost normal-case text-xl">Happy Sales</a>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar