import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          <i className="fa-solid fa-bars"></i>
          </label>

      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
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
    </div>
  )
}
export default Navbar