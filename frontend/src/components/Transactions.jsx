import React from "react";


function Transactions(props) {

  return (
      <tbody>
      <tr>
        <td 
        >{props.inventory.product}</td>
        <td>#{props.inventory.id.slice(-5)}</td>
        <td>$ {props.inventory.cost}</td>
        <td>{props.inventory.qty}</td>
        <td className="flex gap-x-2">  
          {/* The button to open edit modal */}
          <label htmlFor={`edit-item-${props.inventory._id}`} className="btn btn-outline btn-info btn-sm normal-case"><i className="fa-solid fa-pen-to-square px-1"></i>Edit Item</label>

          {/* The button to open delete modal */}
          <label 
          htmlFor={`delete-item-${props.inventory._id}`} 
          className="btn btn-outline btn-error btn-sm normal-case" 
          ><i className="fa-solid fa-trash-can px-1"></i>Delete Item</label>

        </td>
        <td className="contents">
          <div>
          {/* Put this part before </body> tag */}
          {/* The Popup for the 'Delete Item' in Transactions */}
          <input type="checkbox" id={`delete-item-${props.inventory._id}`} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor={`delete-item-${props.inventory._id}`} className="absolute right-4 top-2 text-neutral hover:text-neutral-focus hover:cursor-pointer"><i className="fa-solid fa-xmark fa-lg"></i></label>
              <div className='flex justify-center'>
                <div className='border-4 border-error p-4 px-8 rounded-full'>
                  <i className="fa-solid fa-exclamation text-4xl text-error"></i>
                </div>
              </div>
              <p className="py-6 text-center text-xl font-medium">{`Delete Item #${props.inventory.id.slice(-5)}?`}</p>
              <div className='flex justify-evenly'>
                <label 
                  htmlFor={`delete-item-${props.inventory._id}`}
                  className="btn btn-outline btn-error"
                  onClick={() => props.deleteProduct(props.inventory._id)}
                  >Yes, delete</label>
                <label htmlFor={`delete-item-${props.inventory._id}`} className="btn btn-outline">No, cancel</label>
              </div>
            </div>
          </div>

          {/* Put this part before </body> tag */}
          {/* The Popup for the 'Edit Item' in Transactions */}  
          <input type="checkbox" id={`edit-item-${props.inventory._id}`} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box rounded-2xl flex flex-col gap-y-2">
            <form>
            <div className="flex gap-x-2">
              <div className="flex flex-col grow">
                <span>Product Name</span>
                <input 
                  type="text" 
                  placeholder="Type here" 
                  className="input input-bordered w-full max-w-xs" 
                  name="product"


                />
              </div>
              <div className="flex flex-col grow">
                <span>Cost</span>
                <input 
                  type="text" 
                  placeholder="Type here" 
                  className="input input-bordered w-full max-w-xs" 
                  name="cost"


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


                    name="qty"
                  />
                </div> 
              </div>
            </div>
            
          </form>
              
              <div className="modal-action">
                <label htmlFor={`edit-item-${props.inventory._id}`}className="btn">Yay!</label>
              </div>
            </div>
          </div>
          
          </div>
        </td>
      </tr>
      
      </tbody>

  )
}
export default Transactions