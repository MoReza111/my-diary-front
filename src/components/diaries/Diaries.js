import React , { useEffect } from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import DiaryItem from './DiaryItem'
import { getDiaries } from './../../actions/diaryActions'

const Diaries = ({diary: { diaries,searchResult,addedDiary } , getDiaries}) => {
    
    useEffect(()=>{
        getDiaries()
    },[])

    if(diaries === null){
        return <p style={{color:'#fff', fontSize:'18px'}}>هیچ خاطره ای موجود نیست</p>
    }

    return (
        <div className="cards">
            {searchResult ? (searchResult.map(diary=><DiaryItem diary={diary} key={diary._id}/>) ) :(diaries.map(diary=> <DiaryItem diary={diary} key={diary._id}/>))}
        </div>
    )
}

const mapStateToProps = state => ({
    diary: state.diary
})

export default connect(mapStateToProps, { getDiaries })(Diaries)
