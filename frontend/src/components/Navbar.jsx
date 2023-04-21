import React from "react";
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

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
        <Link className="btn btn-ghost normal-case text-xl" to="/">daisyUI</Link>
        <div className="flex gap-x-2">
          <span>{user && user.email}</span>
          {user && <a onClick={handleClick} className="link link-accent">Logout</a>}
        </div>
      </div>
    </div>
  )
}
export default Navbar