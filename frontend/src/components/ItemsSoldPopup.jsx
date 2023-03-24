import React, { useState, useEffect } from "react";
import Quagga from "quagga";
import ScanSoldItems from "./ScanSoldItems"

function ItemsSoldPopup(props) {
  console.log("Popup Rendered!")
  const [soldItems, setSoldItems] = useState([])
  
  console.log(soldItems)

  //  console.log(props.toggleCamera)
  // console.log(props.camera)

  function onDetected(result) {
    setSoldItems((prevSoldItems) => [...prevSoldItems, result])
    Quagga.stop()    
    
    // props.toggleCamera()
    // console.log("Item scanned!")
    setTimeout(() => {
      Quagga.start()
      // console.log("Starting camera...")
      // props.toggleCamera()
    }, 1000);
  }

  //This function starts up the scanning camera after item get detected
  function cameraTextToggle() {

    console.log("shut down camera")
  }
  

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="scan-sold-items" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative pb-10">
          <h3 className="text-lg font-bold">Items Scanned: </h3>
          {props.camera && <ScanSoldItems onDetected={onDetected} />}
          {!props.camera && <span className="block text-center text-3xl py-6">Item Scanned! <i className="fa-solid fa-square-check"></i></span>}
          <label onClick={cameraTextToggle} htmlFor="scan-sold-items" className="btn btn-md btn-primary absolute right-2 bottom-2">Done</label>
        </div>
      </div>
    </div>
  )
}
export default ItemsSoldPopup