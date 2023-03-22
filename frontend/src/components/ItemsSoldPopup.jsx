import React from "react";
import Scanner from "./Scanner";

function ItemsSoldPopup() {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="scan-sold-items" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="scan-sold-items" className="btn btn-sm btn-primary absolute right-2 bottom-2">Done</label>
          <h3 className="text-lg font-bold">Items Scanned: </h3>
          <Scanner />
        </div>
      </div>
    </div>
  )
}
export default ItemsSoldPopup