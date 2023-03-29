import React from "react";

function Sales(props) {
  
  //When item gets scanned it gets put in the array [1,2,3]
  //render each of those items on the table
  console.log(props.soldItems)

  let scannedItems = {}

  for (let i = 0; i < props.soldItems.length; i++) {
    let item = props.soldItems[i].product
    scannedItems[item] ? scannedItems[item] += 1 : scannedItems[item] = 1
  }
  
  const items = Object.keys(scannedItems).map((key) => {
    return (
      <section className="border-2 border-purple-400">
        <span className="text-3xl font-medium">{key} </span>
        <span className="text-2xl font-medium">x{scannedItems[key]}</span>
      </section>
    )
  })
  

  return (
    <div className="p-4 flex flex-col border-2 border-red-400 h-full justify-between">
      <h2 className="text-2xl font-semibold text-center">Scan items that are ready to be sold</h2>
      {/* The button to open scan items sold */}
      <div className="border-2 border-black flex justify-center">
        <label onClick={props.toggleCamera} htmlFor="scan-sold-items" className="btn btn-primary">Get Started</label> 
      </div>
      {props.soldItems.length > 0 && <section className="border-2 border-black p-2 flex flex-col gap-y-2">
        {items}
      </section>
      }
      
    </div>
  )
}
export default Sales