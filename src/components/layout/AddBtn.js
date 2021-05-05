import React from 'react'
import { connect } from 'react-redux'

import './AddBtn.css'
import { setShowAddDiary } from './../../actions/diaryActions'

const AddBtn = ({setShowAddDiary}) => {
    return (
            <a href="/#add-diary-modal" className="btn modal-trigger" onClick={setShowAddDiary}>
                <i className="fas fa-plus"></i>
            </a>
    )
}

export default connect(null,{setShowAddDiary})(AddBtn)