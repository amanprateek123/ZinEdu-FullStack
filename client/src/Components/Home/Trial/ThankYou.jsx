import React from 'react'
import './Get.scss';

export default function ThankYou(props) {
    console.log(props.res)
    return (
        <div className="getStarted">
            <div className="tick">
                <div className="tick_frame">
                    <img src="https://img.icons8.com/doodle/96/000000/checkmark.png" alt="pic"/>
                </div>           
            </div>
            <div className="tick_text">
                <h1>Thank You !</h1>
                <p>We will back to you with an awesome online class shortly.</p>
            </div>
        </div>
    )
}
