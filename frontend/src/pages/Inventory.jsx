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
  console.log(props)
  
  return (
    <div className="">
      
      <header>
        <h2 className="py-12">Inventory</h2>
        <section className="">
          
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn">open modal</label>
          

          
        </section>
      </header>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Cost</th>
              <th>Qty</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {products}
        </table>
      </div>

    </div>
  )
}
export default Inventory

