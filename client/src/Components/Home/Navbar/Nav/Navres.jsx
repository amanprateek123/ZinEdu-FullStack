import React from 'react'
import './Navres.scss'
import { connect } from "react-redux";
import * as actions from '../../../../store/actions'
import PersonIcon from '@material-ui/icons/Person';
import { NavLink, Link, withRouter, useHistory } from 'react-router-dom';

function Navres(props) {
    return (
        <div className="navres">
            <ul className="unorder3">
               <NavLink to="/class" style={{textDecoration:'none'}}> <li className="nav_list1">CLASS</li></NavLink>
               <NavLink to="/course" style={{textDecoration:'none'}}> <li className="nav_list1">COURSES</li></NavLink>
               <NavLink to="/team" style={{textDecoration:'none'}}> <li className="nav_list1">TEAM</li></NavLink>
               <NavLink to="/blogs" style={{textDecoration:'none'}}> <li className="nav_list1">BLOGS</li></NavLink>
               <NavLink to="/career" style={{textDecoration:'none'}}> <li className="nav_list1">CAREERS</li></NavLink>
                {!props.user?<li className="nav_list1" onClick={props.openModal}>LOGIN</li>:<li className="nav_list1" onClick={props.logout}>LOGOUT</li>}
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        user:state.user
    }
  }
  
  const mapDispatchTooProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()),
        setResponse: (response) => dispatch({ type: actions.SET_RESPONSE, response })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchTooProps)(withRouter(Navres));