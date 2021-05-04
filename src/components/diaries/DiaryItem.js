import React from 'react'

import './DiaryItem.css'

const DiaryItem = () => {
    return (
        <div className="card">
            <div className="card-header">
                <p>دورهمی دوستانه</p>
            </div>
            <div className="card-content">
                <p>لورم ایپسوم یا طرح‌نما  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.</p>
            </div>
            <div className="card-footer">
                <a href="/">ادامه مطلب</a>
            </div>            
        </div>
    )
}

export default DiaryItem
