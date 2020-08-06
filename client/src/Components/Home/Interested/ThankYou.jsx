import React from 'react'
import '../Trial/Get.scss'

export default function ThankYou(props) {
    return (
props.res.status===401?<div className="getStarted" style={{display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'22px'}}>
    <p>{props.res.error}</p>
</div>:
<div className="getStarted">
<div className="tick">
    <div className="tick_frame">
        <img src="https://img.icons8.com/doodle/96/000000/checkmark.png" alt="pic"/>
    </div>           
</div>
<div className="tick_text">
    <h1>Thank You !</h1>
    <p>Our representative get back to you shortly.</p>
    {/* <p style={{color:'green'}}>{props.res.message}.</p> */}
</div>
</div>
    )
}
