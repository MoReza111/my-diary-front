import React from 'react'

import './AddDiaryModal.css'

const AddDiaryModal = () => {

    return (
        <div className="modal" id="add-diary-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>خاطره خود را وارد کنید</h4>
                    <button>X</button>
                </div>
                <div className="modal-body">
                    <div>
                        <label>عنوان:</label>
                        <input type="text" className="inputs" />
                    </div>
                    <div>
                        <label>متن:</label>
                        <textarea type="text" className="inputs" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-pry">ثبت</button>
                </div>
            </div>
        </div>
    )
}

export default AddDiaryModal