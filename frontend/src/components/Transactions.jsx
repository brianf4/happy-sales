import React from "react";


function Transactions(props) {

  return (
        <tbody>
          {/* row */}
          <tr>
            <td>{props.inventory.product}</td>
            <td>#{props.inventory.id.slice(-5)}</td>
            <td>$ {props.inventory.cost}</td>
            <td>{props.inventory.qty}</td>
            <td className="flex gap-x-2">  
              {/* <button 
                onClick={ () => props.deleteProduct(props.inventory._id)} 
                className="btn btn-outline btn-error btn-sm">
                  <i className="fa-solid fa-trash-can px-1"></i>Delete
              </button> */}
              {/* The button to open item modal */}
              <label htmlFor="edit-item" className="btn btn-outline btn-info btn-sm normal-case">Edit Item</label>
              {/* The button to open delete modal */}
              <label 
              htmlFor="delete-item" 
              className="btn btn-outline btn-error btn-sm normal-case" 
              ><i className="fa-solid fa-trash-can px-1"></i>Delete Item</label>
              
              
            </td>
          </tr>
        </tbody>
  )
}
export default Transactions