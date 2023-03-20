import React, { useState, useEffect } from "react";


function Transactions(props) {
  function handleClick() {
    props.handleId(props.inventory._id)
    console.log(props.inventory._id)
  }
  
  
  
  return (
      <tbody className="">
      <tr className="hover border-b-2 border-base-200">
        <td>{props.numOfItem + 1}</td>
        <td>{props.inventory.product}</td>
        <td>#{props.inventory.id.slice(-5)}</td>
        <td>$ {props.inventory.cost}</td>
        <td>{props.inventory.qty}</td>
        <td className="flex gap-x-2">  
          {/* The button to open edit modal */}
          <label 
            htmlFor="edit-item" 
            className="btn btn-info btn-sm normal-case"
            onClick={handleClick}
            >
              <i className="fa-solid fa-pen-to-square px-1"></i>Edit Item</label>
          {/* The button to open delete modal */}
          <label 
            htmlFor={`delete-item`} 
            className="btn btn-error btn-sm normal-case" 
            onClick={handleClick}
          ><i className="fa-solid fa-trash-can px-1"></i>Delete Item</label>

        </td>
      </tr>
      
      </tbody>

  )
}
export default Transactions