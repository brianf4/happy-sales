import React from "react";
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer';
import AddPopup from '../components/AddPopup';
import DeletePopup from '../components/DeletePopup';
import EditPopup from '../components/EditPopup';
import ItemsSoldPopup from '../components/ItemsSoldPopup';
import Sidebar from "../components/Sidebar";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";


//add, delete, edit, itemsSoldPopup

function Dashboard(props) {
  return (
    <div className="h-full">
      <div className="drawer h-full">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-primary">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link to="/dashboard/home">
                <Logo />
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li><a>Navbar Item 1</a></li>
                <li><a>Navbar Item 2</a></li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <div className="h-full">
            {/* <div className="border-2 border-violet-600 w-1/4">
              <h1>Where is my stuff and why is it not being show. Let's find out</h1>
            </div> */}
            <Outlet />
          </div>
          
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <li className='py-2'>
              <Link to="home"><i className="fa-solid fa-house-chimney"></i>Home</Link>
            </li>
            <li className='py-2'>
              <Link to="inventory"><i className="fa-solid fa-boxes-stacked"></i>Inventory</Link>
            </li>
            <li className='py-2'>
              <Link to="sales"><i className="fa-solid fa-tags"></i>Sales</Link>
            </li>
            <li className='py-2'>
              <Link to="generate-barcode"><i className="fa-solid fa-barcode"></i>Barcode Maker</Link>
            </li>

          </ul>

        </div>
      </div>
    </div>

  )
}
export default Dashboard