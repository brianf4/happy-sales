import React from "react";



function EditPopup(props) {
  return (
    <div>
      <input type="checkbox" id="edit-item" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <label htmlFor="edit-item" className="btn">Yay!</label>
          </div>
        </div>
      </div>
      </div>    
  )
}
export default EditPopup