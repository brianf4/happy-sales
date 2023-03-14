import React, { useState } from "react";


function EditPopup(props) {
    const product = props.inventory.find(product => product._id === props.productId)
    // const [text, setText] = useState({
    //     product: product.product,
    //     cost: product.cost,
    //     id: product.id,
    //     qty: product.qty
    //   })
    console.log("I got rendered!")

    // function handleChange(event) {
    //     setText((prevSetText) => {
    //       return {
    //         ...prevSetText,
    //         [event.target.name]: event.target.value
    //       }
    //     })
    //   }
    return (
        <div>
            {/* Put this part before </body> tag */}
            {/* The Popup for the 'Edit Item' in Transactions */}  
            <input type="checkbox" id="edit-item" className="modal-toggle" />
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
                    <label 
                        htmlFor="edit-item" 
                        className="btn"
                        // onClick={handleClick}
                    >Yay!</label>
                </div>
                </div>
            </div>
        </div>  
    )
}
export default EditPopup