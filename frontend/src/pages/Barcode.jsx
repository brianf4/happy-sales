import React, { useEffect, useState } from "react";

function Barcode() {
  const [numOfBarcodes, setNumOfBarcodes] = useState(0)
  const [generateBarcode, setGenerateBarcodes] = useState([])
  

  function handleChange(event) {
    setNumOfBarcodes(event.target.value)
    setGenerateBarcodes([])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    for (let i = 0; i < numOfBarcodes; i++) {
      let num = 1234567890;
      num += i
      setGenerateBarcodes((prevGenerateBarcodes) => [...prevGenerateBarcodes, num.toString()])
    }
  }

  const generatedBarcode = generateBarcode.map((barcode, i) => {
    return (
      <div className="text-center w-max border-4 border-accent" key={i}>
        {/* insert your custom barcode setting your data in the GET parameter "data" */}
        <img alt='Barcode Generator TEC-IT' src={`https://barcode.tec-it.com/barcode.ashx?data=${barcode}&code=Code25IL`}/>
      </div>
    )
  })
  
  return (
    <div className="p-2 h-full">
      <h2 className="py-4 text-center text-2xl font-semibold">Generate your barcode</h2>
      <form onSubmit={handleSubmit} className="flex justify-center gap-x-4 py-12">
        <input 
          type="number" 
          className="input input-bordered input-primary w-1/4 max-w-xs block text-lg"
          name="numOfBarcodes"
          onChange={handleChange}
          value={numOfBarcodes}
        />
        <button className="btn btn-primary">Generate!</button>
      </form>
      <div className="flex flex-wrap gap-2 justify-center">
      {generatedBarcode}
      </div>
    </div>  
  )
}
export default Barcode