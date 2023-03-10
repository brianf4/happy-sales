import React from "react";


function Transactions(props) {
  
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          <tr>
            <th>{props.inventory.id.slice(-5)}</th>
            <td>{props.inventory.product}</td>
            <td>{props.inventory.cost}</td>
            <td className="flex items-center gap-x-2">
              {/* {props.inventory.qty} */}
              <i
                onClick={ () => props.deleteProduct(props.inventory._id)} 
                className="fa-solid fa-trash-can"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Transactions