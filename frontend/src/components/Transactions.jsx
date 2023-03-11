import React from "react";


function Transactions(props) {

  return (
        <tbody>
          {/* row */}
          <tr className="">
            <td>{props.inventory.product}</td>
            <td>#{props.inventory.id.slice(-5)}</td>
            <td>$ {props.inventory.cost}</td>
            <td>{props.inventory.qty}</td>
            <td>  
              {/* <button 
                onClick={ () => props.deleteProduct(props.inventory._id)} 
                className="btn btn-outline btn-error btn-sm">
                  <i className="fa-solid fa-trash-can px-1"></i>Delete
              </button> */}
              {/* The button to open modal */}
              <label htmlFor="my-modal" className="btn">open modal</label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal items-center">
                <div className="modal-box rounded-2xl">
                  <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                  <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                  <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">Yay!</label>
                  </div>
                </div>
              </div>  
              
            </td>
            <td>
              {/* The button to open modal */}
              <label htmlFor="my-modal" className="btn">open modal</label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal items-center">
                <div className="modal-box rounded-2xl">
                  <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                  <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                  <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">Yay!</label>
                  </div>
                </div>
              </div>  
              
            </td>
          </tr>
        </tbody>
  )
}
export default Transactions