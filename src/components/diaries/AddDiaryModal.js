import React , {useState,Fragment,useEffect} from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './AddDiaryModal.css'
import {setShowAddDiary , addDiary,clearAdded} from './../../actions/diaryActions'

const AddDiaryModal = ({ diary:{diaries,showAddDiary,addedDiary},setShowAddDiary,addDiary,clearAdded}) => {
    const [topic, setTopic] = useState('')
    const [content,setContent] =useState('')

    useEffect(()=>{
        if(addedDiary){
            toast.success(`خاطرهشما ثبت شد. کلید شما: ${addedDiary.key}`,{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                rtl:true
            })
            clearAdded()
        }
    },[addedDiary])

    if(!showAddDiary){
        return null
    }

    return (
        <Fragment>
        <div className="modal" id="add-diary-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>خاطره خود را وارد کنید</h4>
                    <button onClick={()=>{
                        setShowAddDiary()
                        setTopic('')
                        setContent('')
                        }}>X</button>
                </div>
                <div className="modal-body">
                    <div>
                        <label>عنوان:</label>
                        <input type="text" className="inputs" onChange={(e)=>setTopic(e.target.value)} />
                    </div>
                    <div>
                        <label>متن:</label>
                        <textarea type="text" className="inputs" onChange={(e)=>setContent(e.target.value)} />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-pry" onClick={()=>{
                        if(topic === "" || content===""){
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
                            const diary = {topic,content}
                            addDiary(diary)
                            setTopic('')
                            setContent('')
                            setShowAddDiary()
                        }
                    }}>ثبت</button>
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

export default connect(mapStateToProps,{setShowAddDiary,addDiary,clearAdded})(AddDiaryModal)