import React , {Fragment, useState} from 'react'

const DiaryModal = () => {
    const [edit,setEdit] = useState(false)
    
    return (
        <div className="modal" id="add-diary-modal">
            <div className="modal-content">
                <div className="modal-header">
                    {edit? <h4>خاطره خود را تغییر دهید</h4> : <h4>مرور خاطره</h4>}
                    <button>X</button>
                </div>
                <div className="modal-body">
                    <div>
                        <label>عنوان:</label>
                        {edit ? <input type="text" className="inputs" /> : <p> دوستا نه دورهمی</p>}
                    </div>
                    <div>
                        <label>متن:</label>
                        {edit ? <textarea type="text" className="inputs" /> : <p>لورم ایپسوم یا طرح‌نما  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شو</p>}
                    </div>
                </div>
                <div className="modal-footer">
                    {edit && <Fragment>
                        <div>
                            <label>کد مخصوص را وارد کنید:</label>
                            <input type="text" className="inputs"></input>
                        </div>
                        <button className="btn-pry">ثبت</button>
                        </Fragment>}
                    <button className="btn-pry" onClick={()=> setEdit(!edit)}><i className="fas fa-pencil-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default DiaryModal