import React, { useState } from "react";
import Scanner from './Scanner'
import Quagga from "quagga";
function Popup() {

  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  const [id, setId] = useState({
    id: ""
  })

  function handlechange(event) {
    setId(prevId => {
      return {
        ...prevId,
        [event.target.name]: result
      }
    })
  }

  function onDetected(result) {
    setResult(result);
    setCamera(false)
    console.log('result', result)
    Quagga.stop()
  };

  return (
    <div className="">
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer items-center">
        <label className="modal-box relative rounded-2xl flex flex-col gap-y-2" htmlFor="">
          <div className="flex gap-x-2">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="flex gap-x-2">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input 
            value={id.id} 
            onChange={handlechange}
            name="id"
            type="text" 
            placeholder="Scan for ID..." 
            className="input input-bordered w-full max-w-xs" 
             required/>
          </div>
          <p>{result ? result : "Scanning..."}</p>
          <button onClick={() => setCamera((prevCamera) => !prevCamera)}>
            {camera ? "Stop" : "Start"}
          </button>
          <div className="container">
            {camera && <Scanner onDetected={onDetected} />}
          </div>
        </label>
      </label>
    </div>
  )
}
export default Popup