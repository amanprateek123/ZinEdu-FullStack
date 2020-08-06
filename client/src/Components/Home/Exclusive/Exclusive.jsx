import React from 'react'
import './Exclusive.scss'
import Floating from '../Floating/Floating'

export default function Exclusive(props) {
    return (
        <div className="exclusive">
            <Floating />
           <div className="title1">
               <h1 className="head1">
                   LEARN IN EXCLUSIVE LIVE CLASSES OF 
               </h1>
               <h1 className="head2">ONLY 10 STUDENTS</h1>
            </div> 
            <div className="free_trial" onClick={props.modal}>
                 <h1 className="free_link">
                     FREE TRIAL CLASSES
                 </h1>
            </div>
        </div>
    )
}
