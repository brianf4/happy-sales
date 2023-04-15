import React, { useState, useEffect } from "react";
import addToCartLogo from "../images/undrawAddToCart.svg"
import confettiPopperLogo from "../images/confettiCone.gif"

function Sales(props) {

  let totalSpent = props.soldItems.reduce((sum, current) => sum + current.cost , 0)


  let scannedItems = {} 

  for (let i = 0; i < props.soldItems.length; i++) {
    let item = props.soldItems[i].product
    scannedItems[item] ? scannedItems[item] += 1 : scannedItems[item] = 1
  }

 //What are we trying to do?
 //We are trying to update the graph in the Home page
 //And the update action happens here in the sales page when user hits complete order button.
  
 
  const items = Object.keys(scannedItems).map((key, i) => {
    
    return (
      <tbody key={i} className="">
        <tr className="">
          <th className="bg-secondary text-secondary-content">{i + 1}</th>
          <td className="bg-secondary text-secondary-content text-lg font-semibold">{key}</td>
          <td className="bg-secondary text-secondary-content text-md">x<span className="text-lg font-semibold ml-px">{scannedItems[key]}</span></td>
          <td className="bg-secondary text-secondary-content text-lg font-semibold">${props.soldItems[i].cost}</td>
        </tr>
      </tbody>
    )
  })
  
  

  
  return (
    <div className="p-4 flex flex-col justify-around border-2 border-red-400 h-full ">
      <h2 className="text-2xl font-semibold text-center">Scan items that are ready to be sold!</h2>
      
      {/* The button to open scan items sold */}
      <div className="flex justify-center">
        <label onClick={props.toggleCamera} htmlFor="scan-sold-items" className="btn btn-primary"><i className="fa-solid fa-camera mr-1"></i>Scan</label> 
      </div>
      
      {/* Add to cart logo */}
      {props.soldItems.length === 0 && 

        <img className="border-2 border-secondary bg-secondary self-center" src={addToCartLogo} alt="" />}
      
      {/* Table */}
      { props.soldItems.length > 0 && props.showTable ? 
      <div className="flex flex-col gap-y-8">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
            </thead>
            
            {items}
            
          </table>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-medium">Total: ${totalSpent}</span>
          <button onClick={props.updateOnCompleteOrder} className="btn btn-primary">Complete Order</button>
        </div>
      </div> : null}
        
      {/* confetti gif/pic */}
      {props.orderComplete && 
        <div id="orderComplete" className="border-2 border-base-200 h-full">
          <img className="m-auto" src={confettiPopperLogo} alt="" />
          <h3 className="text-center text-4xl font-bold py-2">Order Complete!</h3>
          <h4 className="text-center text-xl text-neutral">Thank you for your purchase!</h4>
        </div>}
      
    </div>
  )
}
export default Sales