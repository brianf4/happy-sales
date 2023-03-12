import React from "react";

function DeletePopup(props) {
  {/* Put this part before </body> tag */}
  {/* The Popup for the 'Delete Item' in Transactions */}

  console.log(props)

  return (
    <div>
      <input type="checkbox" id="delete-item" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="delete-item" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className='flex justify-center'>
            <div className='border-4 border-error p-4 px-8 rounded-full'>
              <i class="fa-solid fa-exclamation text-4xl text-error"></i>
            </div>
          </div>
          <p className="py-6 text-center text-xl font-medium">Delete Item?</p>
          <div className='flex justify-evenly'>
            <label 
              htmlFor="delete-item" 
              className="btn btn-outline btn-error"
              onClick={ () => props.deleteProduct(props.inventory._id)} >Yes, delete</label>
            <label htmlFor="delete-item" className="btn btn-outline">No, cancel</label>
          </div>
        </div>
      </div>
      </div>
  )
}
export default DeletePopup