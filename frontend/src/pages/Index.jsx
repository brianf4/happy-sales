import React from "react";
import Footer from "../components/Footer"
import FinancePhoto from '../images/undrawFinanceGraph.svg'
import undrawFollow from '../images/undrawFollow.svg'
import Logo from "../components/Logo"
import barcodeGif from "../images/barcode-generator.gif"
import addProductGif from "../images/add-product.gif"
import salesGif from "../images/sales.gif"
import statsGif from "../images/stats-review.gif"
import { Link } from "react-router-dom";



function Index () {
  return (
   <main className="bg-base-200">
    <div className="px-4 py-6 navbar bg-primary text-primary-content flex justify-between">
        <Link to="/">
          <Logo />
        </Link>
      <ul className="flex gap-x-2">
        <li>
          <a className="btn btn-ghost normal-case text-lg" href="#howItWorks">How it works</a>
        </li>
        <li>
        <Link className="link hover:primary-focus" to="login">Login</Link>
        </li>
      </ul>
    </div>
    <div className="py-8 hero">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between lg:w-full">
        <img src={FinancePhoto} className="max-w-md rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            <span className="block">A Beautiful Modern</span>
            <span className="block">Sales Mangement Site</span>
          </h1>
          <p className="py-6 max-w-lg lg:text-lg">Happy Sales is the premium solution for managing your product sales with ease. With Happy Sales, you'll have access to comprehensive reports and analytics that will give you valuable insights into your business performance. </p>
          <Link className="px-6 btn btn-primary" to="signup">Sign Up</Link>
        </div>
      </div>
    </div>


    <section className="flex flex-col content-between gap-y-16 mt-12">
    <div id="howItWorks" className="hero">
      <div className="hero-content flex flex-col w-full">
        <h2 className="py-10 text-4xl font-semibold">How it works:</h2>
        <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-center lg:gap-x-8 lg:w-full">
          <div className="max-w-md flex flex-col gap-y-6">
            <span className="block text-primary font-bold">GET STARTED</span>
            <h1 className="text-5xl font-bold">Easy to <span className="text-primary">Get Started</span></h1>
            <section className="flex flex-col gap-y-8">
              <section className="flex gap-x-8">
                <div>
                    <span className="text-2xl text-secondary">01</span>
                </div>
                <div>
                  <span className="block text-lg font-bold">Generate</span>
                  <span className="block">Generate barcodes for your porduct</span>
                </div>
              </section>
              <section className="flex gap-x-8">
                <div>
                    <span className="text-2xl text-secondary">02</span>
                </div>
                <div>
                  <span className="block text-lg font-bold">Add</span>
                  <span className="block">Add the product your inventory</span>
                </div>
              </section>
              <section className="flex gap-x-8">
                <div>
                    <span className="text-2xl text-secondary">03</span>
                </div>
                <div>
                  <span className="block text-lg font-bold">Sell</span>
                  <span className="block">Sell your ready to be sold product</span>
                </div>
              </section>
              <section className="flex gap-x-8">
                <div>
                    <span className="text-2xl text-secondary">04</span>
                </div>
                <div>
                  <span className="block text-lg font-bold">Review</span>
                  <span className="block">Review your products overall performance</span>
                </div>
              </section>
            </section>
          </div>
          <div>
            <img className="max-w-md rounded-lg shadow-2xl" src={undrawFollow} alt="" />
          </div>
        </div>
      </div>
    </div>



    <div className="hero">
      <div className="py-20 hero-content flex flex-col lg:flex-row-reverse lg:w-full lg:justify-between">
        <div className="max-w-lg">
          <span className="block text-primary font-bold">CREATE</span>
          <h1 className="text-5xl font-bold">Generate your barcodes</h1>
          <p className="py-6 lg:text-lg">Effortlessly generate unique barcodes for your products and easily add them to your inventory for organized tracking and management.</p>
        </div>
        <div>
          <img className="max-w-md rounded-lg shadow-2xl" src={barcodeGif} alt="" />
        </div>
      </div>
    </div>



    <div className="hero">
      <div className="py-20 hero-content flex flex-col lg:flex-row lg:w-full lg:justify-between">
        <div className="max-w-lg">
          <span className="block text-primary font-bold">SCAN</span>
          <h1 className="text-5xl font-bold">Add your product to the inventory</h1>
          <p className="py-6 lg:text-lg">Managing your inventory is now easier than ever. Simply scan your barcode id into the form and add a name, cost, and the amount of you have on hand.</p>
        </div>
        <div>
          <img className="max-w-md rounded-lg shadow-2xl" src={addProductGif} alt="" />
        </div>
      </div>
    </div>


    <div className="py-20 hero">
      <div className="hero-content flex flex-col lg:flex-row-reverse lg:w-full lg:justify-between">
        <div className="max-w-lg">
          <span className="block text-primary font-bold">SELL</span>
          <h1 className="text-5xl font-bold">Scan the items ready to be sold</h1>
          <p className="py-6 lg:text-lg">With Happy Sales, selling your products is a breeze. Scan items that are ready to be sold to the sales queue to see the transactions. </p>
        </div>
        <div>
          <img className="max-w-md rounded-lg shadow-2xl" src={salesGif} alt="" />
        </div>
      </div>
    </div>



    <div className="py-20 hero">
      <div className="hero-content flex flex-col lg:flex-row lg:w-full lg:justify-between">
        <div className="max-w-lg">
          <span className="block text-primary font-bold">REVIEW</span>
          <h1 className="text-5xl font-bold">Review and manage</h1>
          <p className="py-6 lg:text-lg">With Happy Sales, you'll have access to comprehensive reports and analytics that will give you valuable insights into your business performance. Whether you're a small business owner or a seasoned professional, Happy Sales has everything you need to optimize your sales and drive growth.</p>
        </div>
        <div>
          <img className="max-w-md rounded-lg shadow-2xl" src={statsGif} alt="" />
        </div>
      </div>
    </div>
    </section>

     <Footer />
   </main>
  )
} 
export default Index