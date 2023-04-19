import React from "react";
import FinancePhoto from '../images/undrawFinanceGraph.svg'
import undrawFollow from '../images/undrawFollow.svg'
import { Link } from "react-router-dom";



function Index () {
  return (
   <main>
    <div className="navbar bg-primary text-primary-content flex justify-between">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      <ul>
        <li>
          <a className="btn btn-primary">How it works</a>
        </li>
        <li>
          <a className="btn btn-primary">About</a>
        </li>
        <li>
          <a className="btn btn-primary">Contact</a>
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
    <div className="hero bg-base-200">
      <div className="hero-content ">
        <div className="max-w-md">
          <span className="block">GET STARTED</span>
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
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
      </div>
    </div>
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
      </div>
    </div>
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
      </div>
    </div>

   </main>
  )
} 
export default Index