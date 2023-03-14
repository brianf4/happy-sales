import React, { useState } from "react";
import Scanner from './Scanner'
import Quagga from "quagga";


function Popup(props) {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  
  const [productData, setProductData] = useState({
    product: '',
    cost: 0,
    id: '',
    qty: 0
  })

  async function handleSubmit(event) {
    event.preventDefault()

    const product = { ...productData }
    console.log('what is this: ', product)

    const res = await fetch('http://localhost:4000/api/inventory', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    const data = await res.json()

    if (!res.ok) {
      setProductData((prevProductData) => {
        return {
          ...prevProductData,
          error: data.error
        }
      })
      console.log(productData.error)
    }
    if (res.ok) {
      //Resets the data after submit
      setProductData((prevProductData) => {
        return {
          ...prevProductData,
          product: '',
          cost: 0,
          id: '',
          qty: 0,
          error: null,
        }
      })
      props.addProduct(data)
      console.log('New product added: ', data)
    }
  }

  function handleChange(event) {
    const { product, cost, id, qty, value, name } = event.target
    setProductData(prevProductData => {
      return {
        ...prevProductData, 
        [name]: value
      }
      
    })
    // setId(event.target.value)
  }


  function onDetected(result) {
    setResult(result);
    setProductData(prevProductData => {
      return {
        ...prevProductData,
        id: result
      }
    })
    setCamera(false)
    Quagga.stop()
  };

  return (
    <div className="">
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer items-center">
        <label className="modal-box rounded-2xl flex flex-col gap-y-2" htmlFor="">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-x-2">
              <div className="flex flex-col grow">
                <span>Product Name</span>
                <input 
                  type="text" 
                  placeholder="Type here" 
                  className="input input-bordered w-full max-w-xs" 
                  name="product"
                  value={productData.product}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col grow">
                <span>Cost</span>
                <input 
                  type="text" 
                  placeholder="Type here" 
                  className="input input-bordered w-full max-w-xs" 
                  name="cost"
                  value={productData.cost}
                  onChange={handleChange}
                  />
              </div>
            </div>
            <div>
              <div className="flex gap-x-2 items-center">
                <div className="flex flex-col grow">
                  <div className="tooltip tooltip-right pb-2 text-lg self-start" data-tip="Scan product for ID">
                    <span>ID: </span>
                    <i className="fa-solid fa-circle-info ml-2"></i>
                  </div>
                  <input 
                    value={productData.id} 
                    onChange={handleChange}
                    name="id"
                    type="text" 
                    readOnly
                    placeholder="Scan for ID..." 
                    className="input input-bordered w-full max-w-xs" 
                  required/>
                </div>
                <div className="flex flex-col grow">
                  <span className="pb-2">Qty</span>
                  <input 
                    type="number" 
                    placeholder="Type here" 
                    className="input input-bordered w-full max-w-xs" 
                    value={productData.qty}
                    onChange={handleChange}
                    name="qty"
                  />
                </div> 
              </div>
            </div>
            {/* <p>{result ? result : "Scanning..."}</p> */}
            <div className="flex justify-between py-3">
              <button type="button" className="btn btn-secondary" onClick={() => setCamera((prevCamera) => !prevCamera)}>
                {camera ? (
                  <span><i className="fa-solid fa-stop"></i> Stop</span>
                  ) : (
                  <span><i className="fa-solid fa-camera"></i> Scan</span>
                    )}
              </button>

              <button type="submit" className="btn btn-primary">Add <i className="fa-solid fa-plus ml-2 text-lg"></i>
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