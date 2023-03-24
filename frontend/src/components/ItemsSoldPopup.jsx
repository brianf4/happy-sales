import React, { useState } from "react";
import Quagga from "quagga";
import ScanSoldItems from "./ScanSoldItems"

function ItemsSoldPopup(props) {
  
  const [soldItems, setSoldItems] = useState([])
  
  console.log(soldItems)

   

  function onDetected(result) {
    setSoldItems((prevSoldItems) => [...prevSoldItems, result])
    props.toggleCamera()
    Quagga.stop()
    cameraTextToggle()
  }

  //This function starts up the scanning camera after item get detected
  function cameraTextToggle() {
    setTimeout(() => {
      
      props.toggleCamera()
    }, 1000);
  }
  
  console.log(props.camera)
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="scan-sold-items" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative pb-10">
          <h3 className="text-lg font-bold">Items Scanned: </h3>
          {props.camera && <ScanSoldItems onDetected={onDetected} />}
          {!props.camera && <span className="block text-center text-3xl py-6">Item Scanned!</span>}
          <label onClick={props.toggleCamera} htmlFor="scan-sold-items" className="btn btn-md btn-primary absolute right-2 bottom-2">Done</label>
        </div>
      </div>
    </div>
  )
}
export default ItemsSoldPopup