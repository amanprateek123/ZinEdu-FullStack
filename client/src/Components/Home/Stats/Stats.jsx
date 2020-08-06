import React from 'react'
import './Stats.scss'
import pic from '../../../images/stats.PNG'

export default function Stats() {
    return (
        <div className="stats">
            <div className="stats_img">
                <img src={pic} alt="pic"/>
            </div>
        </div>
    )
}
