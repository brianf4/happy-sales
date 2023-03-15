import React from "react";

function DeletePopup(props) {

    function handleClick() {
        props.deleteProduct(props.product._id)
    }
    
    
    return (
        <div>
            {/* Put this part before </body> tag */}
            {/* The Popup for the 'Delete Item' in Transactions */}
            <input type="checkbox" id={`delete-item`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`delete-item`} className="absolute right-4 top-2 text-neutral hover:text-neutral-focus hover:cursor-pointer"><i className="fa-solid fa-xmark fa-lg"></i></label>
                    <div className='flex justify-center'>
                        <div className='border-4 border-error p-4 px-8 rounded-full'>
                        <i className="fa-solid fa-exclamation text-4xl text-error"></i>
                        </div>
                    </div>
                    <p className="py-6 text-center text-xl font-medium">Delete?</p>
                    <div className='flex justify-evenly'>
                        <label 
                        htmlFor={`delete-item`}
                        className="btn btn-outline btn-error"
                        onClick={handleClick}
                        >Yes, delete</label>
                        <label htmlFor={`delete-item`} className="btn btn-outline">No, cancel</label>
                    </div>
                </div>
          </div>
        </div>
    )
}
export default DeletePopup