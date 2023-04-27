import React from "react";
import FinancePhoto from '../images/undrawFinanceGraph.svg'
import undrawFollow from '../images/undrawFollow.svg'
import undrawAddToCart from '../images/undrawAddToCart.svg'
import Logo from "../components/Logo"
import barcodeGif from "../images/barcode-generator.gif"
import addProductGif from "../images/add-product.gif"
import salesGif from "../images/sales.gif"
import statsGif from "../images/stats-review.gif"
import { Link } from "react-router-dom";



function Index () {
  return (
   <main>
    <div className="p-4 navbar bg-primary text-primary-content flex justify-between">
        <Link to="/">
          <Logo />
        </Link>
      <ul className="flex gap-x-2">
        <li>
          <a href="#howItWorks">How it works</a>
        </li>
        <li>
          <Link className="btn btn-primary" to="signup">Sign Up</Link>
        </li>
        <li>
        <Link className="link hover:primary-focus" to="login">Login</Link>
        </li>
      </ul>
    </div>
    <div className="hero bg-base-200 border-2 border-purple-400">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={FinancePhoto} className="max-w-md rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            <span className="block">A Beautiful Modern</span>
            <span className="block">Sales Mangement Site</span>
          </h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    <div id="howItWorks" className="hero bg-base-200 border-2 border-yellow-300">
      <div className="hero-content flex flex-col lg:flex-row ">
        <h2 className="py-10 text-4xl font-semibold">How it works:</h2>
        <div className="max-w-md">
          <span className="block text-primary font-bold">GET STARTED</span>
          <h1 className="text-5xl font-bold">Learn how to get started with these steps.</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div>
          <img className="max-w-md rounded-lg shadow-2xl" src={undrawFollow} alt="" />
        </div>
      </div>
      <div>

      </div>
    </div>
    <div className="hero bg-base-200 border-2 border-yellow-300">
      <div className="hero-content flex flex-col lg:flex-row">
        <div className="max-w-md">
          <span className="block text-primary font-bold">GET STARTED</span>
          <h1 className="text-5xl font-bold">Generate your barcodes</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div>
          <img className="max-w-md rounded-lg shadow-2xl" src={barcodeGif} alt="" />
        </div>
      </div>
      <div>

      </div>
    </div>
    <div className="hero bg-base-200 border-2 border-yellow-300">
      <div className="hero-content flex flex-col lg:flex-row">
        <div className="max-w-md">
          <span className="block text-primary font-bold">GET STARTED</span>
          <h1 className="text-5xl font-bold">Add your product to the inventory</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div>
          <img className="max-w-md rounded-lg shadow-2xl" src={addProductGif} alt="" />
        </div>
      </div>
      <div>

      </div>
    </div>
    <div className="hero bg-base-200 border-2 border-yellow-300">
      <div className="hero-content flex flex-col lg:flex-row">
        <div className="max-w-md">
          <span className="block text-primary font-bold">GET STARTED</span>
          <h1 className="text-5xl font-bold">Scan the items ready to be sold</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div>
          <img className="max-w-md rounded-lg shadow-2xl" src={salesGif} alt="" />
        </div>
      </div>
      <div>

      </div>
    </div>
    <div className="hero bg-base-200 border-2 border-yellow-300">
      <div className="hero-content flex flex-col lg:flex-row">
        <div className="max-w-md">
          <span className="block text-primary font-bold">GET STARTED</span>
          <h1 className="text-5xl font-bold">Review and manage</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div>
          <img className="max-w-md rounded-lg shadow-2xl" src={statsGif} alt="" />
        </div>
      </div>
      <div>

      </div>
    </div>
    

   </main>
  )
} 
export default Index