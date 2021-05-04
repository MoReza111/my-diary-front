import React from 'react'

import './AddBtn.css'

const AddBtn = () => {
    return (
        <div className="fixed-btn">
            <a href="/#add-diary-modal" className="btn modal-trigger">
                <i className="fas fa-plus"></i>
            </a>
        </div>
    )
}

export default AddBtn