import React from 'react'
import { connect } from 'react-redux'

import './DiaryItem.css'
import { setCurrent , setShowDiary } from './../../actions/diaryActions'

const DiaryItem = ({diary,setCurrent,setShowDiary}) => {
    const summary = diary.content.replace(/(([^\s]+\s\s*){20})(.*)/,"$1…")
    return (
        <div className="card">
            <div className="card-header">
                <p>{diary.topic}</p>
            </div>
            <div className="card-content">
                <p>{summary}</p>
            </div>
            <div className="card-footer">
                <a href="/#" onClick={()=>{
                    setCurrent(diary)
                    setShowDiary()
                    }}>ادامه مطلب</a>
            </div>            
        </div>
    )
}

export default connect(null,{setCurrent,setShowDiary})(DiaryItem)
