import React from "react";

function Sales(props) {
  
  let totalSpent = props.soldItems.reduce((sum, current) => sum + current.cost , 0)
  

  let scannedItems = {}

  for (let i = 0; i < props.soldItems.length; i++) {
    let item = props.soldItems[i].product
    scannedItems[item] ? scannedItems[item] += 1 : scannedItems[item] = 1
  }

  
  const items = Object.keys(scannedItems).map((key, i) => {
    return (
      <section key={i}  className="border-2 border-base-200 bg-secondary py-1">
        <span className="text-3xl font-medium text-secondary-content">{key} </span>
        <span className="text-2xl font-medium text-secondary-content">x{scannedItems[key]}</span>
      </section>
    )
  })

  return (
    <div className="p-4 flex flex-col justify-around border-2 border-red-400 h-full ">
      <h2 className="text-2xl font-semibold text-center">Scan items that are ready to be sold!</h2>
      {/* The button to open scan items sold */}
      <div className="flex justify-center">
        <label onClick={props.toggleCamera} htmlFor="scan-sold-items" className="btn btn-primary"><i className="fa-solid fa-camera mr-1"></i>Scan</label> 
      </div>
      {props.soldItems.length > 0 && 
      <div className="flex flex-col gap-y-8">
        <section className="border-2 border-black p-2 flex flex-col gap-y-2">
          {items}
        </section>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-medium">Total: ${totalSpent}</span>
          <button onClick={props.completeOrder} className="btn btn-primary">Complete Order</button>
        </div>
      </div>
      }
      
    </div>
  )
}
export default Sales