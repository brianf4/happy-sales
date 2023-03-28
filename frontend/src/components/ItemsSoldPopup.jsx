import React, { useState, useEffect, useRef } from "react";
import Quagga from "quagga";
import ScanSoldItems from "./ScanSoldItems"

function ItemsSoldPopup(props) {
  
 
  //trying to set the data array at a higer state and configure it from here
  function onDetected(result) {
    props.onDetected(result)
    
   
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
          <label htmlFor="scan-sold-items" className="btn btn-md btn-primary absolute right-2 bottom-2">Done</label>
        </div>
      </div>
    </div>
  )
}
export default ItemsSoldPopup