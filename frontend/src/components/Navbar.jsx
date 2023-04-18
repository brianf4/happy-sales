import React from "react";
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  function handleClick() {
    logout()
  }


  return (
    <div className="navbar bg-primary text-primary-content sticky">

      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
        <i className="fa-solid fa-bars"></i>
      </label>

      <div className="px-2 flex-1 justify-between">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <div>
          <span>{user && user.email}</span>
          {user && <a onClick={handleClick} className="link link-accent">Logout</a>}
        </div>
      </div>
    </div>
  )
}
export default Navbar