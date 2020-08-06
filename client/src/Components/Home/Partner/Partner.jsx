import React from 'react'
import './Partner.scss'

export default function Partner(props) {
    return (
        <div className="partner">
            <div className="part_head">
                <h1 className="zin_head">ZINEDU</h1>
                <h1 className="partnerhead">PARTNER PROGRAM</h1>
            </div>
            <div className="partner_text">
               <p>
               If you are a tutor, teacher or a coaching institution then you will be able to grab once in a lifetime opportunity to earn money by simply
                pursuing your passion for teaching allowing you to collaborate with us and provide your students “A world class learning experience”.     
               </p>
            </div>
            <div className="interest">
                <div onClick={props.open} style={{cursor:'pointer'}}>
                    I am Intrested
                </div>
            </div>
        </div>
    )
}
