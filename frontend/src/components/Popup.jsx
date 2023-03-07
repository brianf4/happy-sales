import React, { useState } from "react";
import Scanner from './Scanner'
import Quagga from "quagga";
function Popup() {

  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  const [id, setId] = useState("")

  function handlechange(event) {
    setId(event.target.value)
  }

  function onDetected(result) {
    setResult(result);
    setId(result)
    setCamera(false)
    Quagga.stop()
  };

  return (
    <div className="">
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer items-center">
        <label className="modal-box relative rounded-2xl flex flex-col gap-y-2" htmlFor="">
          <form action="">
            <div className="flex gap-x-2">
              <div className="flex flex-col grow">
                <span>Product Name</span>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              </div>
              <div className="flex flex-col grow">
                <span>Cost</span>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              </div>
            </div>
            <div>
              <div className="flex gap-x-2 items-center">
                <div className="flex flex-col grow">
                  <div className="tooltip tooltip-right pb-2 text-lg self-start" data-tip="Scan product for ID">
                    <span>ID: </span>
                    <i class="fa-solid fa-circle-info ml-2"></i>
                  </div>
                  <input 
                  value={id} 
                  onChange={handlechange}
                  name="id"
                  type="text" 
                  readOnly
                  placeholder="Scan for ID..." 
                  className="input input-bordered w-full max-w-xs" 
                  required/>
                </div>
                <div className="flex flex-col grow">
                  <span className="pb-2">Qty</span>
                  <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div> 
              </div>
            </div>
            {/* <p>{result ? result : "Scanning..."}</p> */}
            <div className="flex justify-between py-3">
              <button type="button" className="btn btn-secondary"s onClick={() => setCamera((prevCamera) => !prevCamera)}>
                {camera ? (
                  <span><i class="fa-solid fa-stop"></i> Stop</span>
                  ) : (
                  <span><i class="fa-solid fa-camera"></i> Scan</span>
                    )}
              </button>

              <button type="submit" class="btn btn-primary">Add <i class="fa-solid fa-plus ml-2 text-lg"></i>
              </button>
            </div>
          </form>
          <div className="container">
            {camera && <Scanner onDetected={onDetected} />}
          </div>
        </label>
      </label>
    </div>
  )
}
export default Popup