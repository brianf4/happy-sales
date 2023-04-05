import React, { useState } from "react";
import addToCartLogo from "../images/undrawAddToCart.svg"
import confettiPopperLogo from "../images/confettiCone.gif"

function Sales(props) {

  let totalSpent = props.soldItems.reduce((sum, current) => sum + current.cost , 0)
  console.log(props.soldItems)

  let scannedItems = {} 

  for (let i = 0; i < props.soldItems.length; i++) {
    let item = props.soldItems[i].product
    scannedItems[item] ? scannedItems[item] += 1 : scannedItems[item] = 1
  }
  
 //What are we trying to do?
 //We are trying to update the graph in the home page
 //And the update action happens here in the sales page when user hits complete order button.

 //So how do we go about updating that graph?
 //graphArr[0,0,8,0] 
 //salesArr[4, 3, 1] = 8 
 //Make a function that has two parameters. graphArr & salesArr.
 //Once the salesArr is done with the incoming data sum the total value of the arr and place in the graphArr acording indicie
  
  
 
  const items = Object.keys(scannedItems).map((key, i) => {
    return (
      <section key={i}  className="border-2 border-base-200 bg-secondary py-1">
        <span className="text-3xl font-medium text-secondary-content">{key} </span>
        <span className="text-2xl font-medium text-secondary-content">x{scannedItems[key]}</span>
      </section>
    )
  })

  
  
  console.log(props.soldItems.length, props.orderComplete)
  return (
    <div className="p-4 flex flex-col justify-around border-2 border-red-400 h-full ">
      <h2 className="text-2xl font-semibold text-center">Scan items that are ready to be sold!</h2>
      
      {/* True --> False */}
      {props.soldItems.length === 0 && <img className="border-2 border-secondary bg-secondary" src={addToCartLogo} alt="" />}

      {/* The button to open scan items sold */}
      <div className="flex justify-center">
        <label onClick={props.toggleCamera} htmlFor="scan-sold-items" className="btn btn-primary"><i className="fa-solid fa-camera mr-1"></i>Scan</label> 
      </div>
      
      {/* False --> True --> False */} 
      { props.orderComplete && 
      <div className="flex flex-col gap-y-8">
        <section className="border-2 border-black p-2 flex flex-col gap-y-2">
          {items}
        </section>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-medium">Total: ${totalSpent}</span>
          <button onClick={props.updateGraphOnCompleteOrder} className="btn btn-primary">Complete Order</button>
        </div>
      </div>
      }

      {/* False --> True */}
      {props.orderComplete && 
        <div id="orderComplete" className="border-2 border-black h-full">
          <img className="m-auto" src={confettiPopperLogo} alt="" />
          <h3 className="text-center text-4xl py-2">Order Complete!</h3>
          <h4 className="text-center text-xl text-neutral">Thank you for your purchase!</h4>
        </div>}
      
    </div>
  )
}
export default Sales