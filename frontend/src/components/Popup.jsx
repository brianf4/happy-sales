import React, { useState } from "react";
import Scanner from './Scanner'

function Popup() {

  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  function onDetected(result) {
    setResult(result);
    console.log('result', result)
    setCamera(false)
    Quagga.stop()
  };

  return (
    <div className="border-2 border-red-600">
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer items-center px-2">
        <label className="modal-box relative rounded-2xl" htmlFor="">
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