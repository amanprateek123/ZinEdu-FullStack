import React from 'react'
import './Nav2.scss'
import {NavLink} from 'react-router-dom'

export default function Nav2() {
    return (
        <div className="nav2">
            <ul className="unorder2">
                  <NavLink to="/class"><li className="nav_list">CLASS</li></NavLink>  
                  <NavLink to="/course"> <li className="nav_list">COURSES</li></NavLink>
                  <NavLink to="/team"> <li className="nav_list">TEAM</li></NavLink>
                  <NavLink to="/blogs"><li className="nav_list">BLOGS</li></NavLink>
                  <NavLink to="/career"><li className="nav_list">CAREERS</li></NavLink>
            </ul>
        </div>
    )
}
