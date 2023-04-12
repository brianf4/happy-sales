import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content sticky">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          <i className="fa-solid fa-bars"></i>
          </label>

      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
    </div>
  )
}
export default Navbar