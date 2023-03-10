import { useEffect, useState } from "react";
import Transactions from "../components/Transactions";
import Popup from '../components/Popup';

function Inventory(props) {

  const products = props.inventory.map((product) => {
    return (
      <Transactions 
        key={props.inventory._id}
        inventory={product}
        deleteProduct={props.deleteProduct}
      />  
    )
  } )
  
  return (
    <div className="">
      
      <header>
        <h2 className="py-12">Inventory</h2>
        <section className="">
          
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn">open modal</label>
          <Popup 
            addProduct={props.addProduct}
          />

          
        </section>
      </header>
      {products}
      
    </div>
  )
}
export default Inventory

