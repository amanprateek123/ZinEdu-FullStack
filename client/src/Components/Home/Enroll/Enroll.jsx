import React from 'react'
import './Enroll.scss'
import Card from './Card/Card'
import img1 from '../../../images/enroll1.PNG'
import img2 from '../../../images/enroll2.png'
import img3 from '../../../images/enroll3.png'
import img4 from '../../../images/enroll4.png'

export default function Enroll() {
    return (
        <div className="enroll">
           <div className="card_container">
               <div className="colus">
               <Card title="DAILY LIVE CLASSES" 
               img={img1}
               text="These live interaction classes would bring the best of our faculty to you DAILY! Giving you regular lectures as per your syllabus so that you don’t miss a thing and be a master of everything."/>
               </div>
               <div className="colus">
               <Card title="EXCLUSIVE LIVE CLASSES"
               img={img2}
               text="Having only 10 students a batch so that you could get your own special treatment and have an EXCLUSIVE LIVE CLASS EXPERIENCE."/>
               </div>
                <div className="colus">
                <Card title="REVISION CLASSES" 
                img={img3}
                text="Forgot anything? Don’t worry, revision classes are here. Classes practice questions, doubt solving sessions and much more, just to make you revise well. "/>
                </div>
                <div className="colus">
                <Card title="RECORDED CLASSES"
                img={img4}
                text="Missed anything? Not to worry we also have a range of pre-recorded classes/lectures, which will help you cope up from anywhere you left."/>
                </div> 
                       </div>
        </div>
    )
}
