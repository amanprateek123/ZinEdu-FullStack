import React from 'react'
import './Courses.scss'
import img from '../../images/course.jpg'
import img1 from '../../images/physics.png'
import img2 from '../../images/math.png'
import img3 from '../../images/chemistry.png'
import img4 from '../../images/ebook.png'

export default function Courses() {
    return (
        <div>
            <div className='course'>
               <h1>
                   JEE MAIN 2020 CRASH COURSE
               </h1>
               <p>
                   Live classes by Experts who produced AIR 1,2,21 & more
                   <br/>
                   20 tests to help you improve your approach and make your exam ready
                   <br/>
                   Instant doubt Resolution & 5000+ High level Questions
               </p>
            </div>
            <div className="course_det">
                <img src={img}/>
                <div className="price">
                    <h3>
                    ₹ 7999 /-
                    </h3>
                    <span className="span">
                        <div>
                        <del>₹ 25000</del>
                        </div>
                        <div style={{color:'green'}}>
                            70% off
                        </div>
                    </span>
                </div>
                <div className="buy">
                    <button>
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="include">
                <div className="bg_include">
                   What is included?
                </div>
                <div> 
                </div>
            </div>
        </div>
    )
}
