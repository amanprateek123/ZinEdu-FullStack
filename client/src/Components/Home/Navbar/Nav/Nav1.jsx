import React,{useState} from 'react';
import img from '../../../../images/logo.png'
import './Nav1.scss'
import Navres from './Navres'
import { connect } from "react-redux";
import * as actions from '../../../../store/actions'
import PersonIcon from '@material-ui/icons/Person';
import { NavLink, Link, withRouter, useHistory } from 'react-router-dom';
import {
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  Collapse

} from 'reactstrap';
const Nav1 = (props) => {
  console.log(props.user)
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar  light expand="md" className="nav1">
        <NavbarBrand href="/" className="brand">
            <img src={img} alt="pic" className="brand_img"/>
        </NavbarBrand> 
        {props.user? <span className="account_res"> <PersonIcon/> {props.user.name}</span>:null}
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <Navres openModal={props.openModal}/>
          </Nav>
          <Nav className="mr-auto" navbar>
                <div className='navitem'>
                <NavLink to="/components/" className="zinedu">ZINEDU LIVE</NavLink>
                <NavLink to="/components/" className="mle">MAKING LEARNING EXCITING</NavLink>
                </div>            
          </Nav>
        </Collapse>
        {/* <div className="nav_text" onClick={props.openModal}>
          <NavLink to="#" className="nav_subtext">
            LOGIN
          </NavLink>
        </div> */}
       
          {!props.user?
          <div className="nav_text" onClick={props.openModal}>
          <NavLink to="#" className="nav_subtext">
            LOGIN
          </NavLink>
        </div> :
        <div style={{display:'flex',flexDirection:'row',width:'300px'}}>          
          <Link to="/profile" className="account" ><PersonIcon/> <span>{props.user.name}</span></Link>
          <div className="nav_text_1" onClick={props.logout}>
           <NavLink to="#" className="nav_subtext">
           LOGOUT
         </NavLink>
       </div> 
        </div>         
 }
       
      </Navbar>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchTooProps)(withRouter(Nav1));

