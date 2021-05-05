import React , {Fragment, useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {setShowDiary , updateDiary, clearCurrent, clearError} from './../../actions/diaryActions'

const DiaryModal = ({ diary:{showDiary,current,errors},setShowDiary,updateDiary,clearCurrent,clearError}) => {
    const [edit,setEdit] = useState(false)
    const [topic,setTopic] = useState('')
    const [content,setContent] = useState('')
    const [key,setKey] = useState('')
    
    useEffect(()=>{
        if(current){
            setTopic(current.topic)
            setContent(current.content)
        }
        if(errors !== null){
            toast.error(errors, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                rtl:true
            })
            setTimeout(()=>clearError(),5000)
        }
    },[current,errors])

    if(!showDiary){
        return null
    }

    return (
        <Fragment>
        <div className="modal" id="add-diary-modal">
            <div className="modal-content">
                <div className="modal-header">
                    {edit? <h4>خاطره خود را تغییر دهید</h4> : <h4>مرور خاطره</h4>}
                    <button onClick={()=>{
                        setShowDiary()
                        setContent('')
                        setTopic('')
                        setKey('')
                        clearCurrent()
                        }}>X</button>
                </div>
                <div className="modal-body">
                    <div>
                        <label>عنوان:</label>
                        {edit ? <input type="text" className="inputs" value={topic} onChange={(e)=>setTopic(e.target.value)} /> : <p>{topic}</p>}
                    </div>
                    <div>
                        <label>متن:</label>
                        {edit ? <textarea type="text" className="inputs" value={content} onChange={(e)=>setContent(e.target.value)} /> : <p>{content}</p>}
                    </div>
                </div>
                <div className="modal-footer">
                    {edit && <Fragment>
                        <div>
                            <label>کد مخصوص را وارد کنید:</label>
                            <input type="text" className="inputs" onChange={(e)=>setKey(e.target.value)}></input>
                        </div>
                        <button className="btn-pry" onClick={async()=>{
                            if(key==="" || topic===""|| content===""){
                                toast.error('همه ی فیلد ها را پر کنید',{
                                    position: "bottom-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    rtl:true
                                })
                            }else{
                                const diary = {id:current._id,topic,content,key}
                                await updateDiary(diary)
                                setKey('')
                                setEdit(false)
                            }
                        }}>ثبت</button>
                        </Fragment>}
                    <button className="btn-pry" onClick={()=> setEdit(!edit)}><i className="fas fa-pencil-alt"></i></button>
                </div>
            </div>
        </div>
        <ToastContainer />
        </Fragment>
    )
}

const mapStateToProps = state => ({
    diary: state.diary
})

export default connect(mapStateToProps,{setShowDiary,updateDiary,clearCurrent,clearError})(DiaryModal)