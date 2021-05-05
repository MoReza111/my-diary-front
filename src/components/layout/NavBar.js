import React , {useState} from 'react'
import { connect } from 'react-redux'

import {setSearchResult,clearSearch} from './../../actions/diaryActions'
import './NavBar.css'

const NavBar = ({diaries,setSearchResult,clearSearch}) => {
    const [search,setSearch] = useState(false)
    const [text,setText] = useState('')

    const searchDiary=(text)=>{
        if(text!==''){
            setSearchResult(diaries.filter(diary=>{
                return diary.topic.includes(text) || diary.content.includes(text)})
            )
        }
    }

    return (
        <nav className="nav">
            <div className="logo">
                <a href="/">دفترچه خاطرات من</a>
            </div>
            <div className="saerch">
                {text !== '' && <button onClick={()=>{
                    setText('')
                    clearSearch()
                    setSearch(false)
                    }}><i className="fas fa-times"></i></button>}
                <input type="text" name="search" value={text} onChange={e=> setText(e.target.value)} onFocus={ e=> {setSearch(true)}} onBlur={e=>{setSearch(false)}}/>
                <button onClick={()=> searchDiary(text)}>{!search ?<i className="fas fa-search"></i> : <i className="fas fa-arrow-left"></i> }</button> 
            </div>
        </nav>
    )
}

const mapStateToProps = state=>({
    diaries: state.diary.diaries
})

export default connect(mapStateToProps,{setSearchResult,clearSearch})(NavBar)